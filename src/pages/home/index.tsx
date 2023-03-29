import { Container } from "./styles"
import { Process } from '../../components/process'
import { useEffect, useState } from "react"
import { requestsProcess } from "../../services/requests";
import { EmptyMessage } from "../../components/emptyMessage";
import { SideSheet } from "../../components/sidesheets";
import { RegisterProcess } from '../../components/forms/registerProcess'
import { EditProcess } from "../../components/forms/editProcess";

export const Home = () => {

    const [process, setProcess] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [processId, setProcessId] = useState<string>('');

    useEffect(() => {
        (async () => {
            const process = await requestsProcess.getProcess()
            setProcess(process);
        })()
    }, [open, edit])

    return (
        <Container>
            <h1>Processos</h1>
            <section>
                {process.length ? (
                    process.map((process: any) => {
                        return (
                            <Process
                                onClick={() => { setProcessId(process.id), setEdit(true) }}
                                key={process.id}
                                title={process.title}
                                subtitle={process.subtitle}
                                task='task da vez'
                            />
                        );
                    })
                ) : (
                    <div>
                        <EmptyMessage isCenter message="Não há processos cadastrados!" />
                    </div>
                )}
            </section>

            <SideSheet
                title="Cadastro de processos"
                isOpen={open || edit}
                onClose={open ? () => setOpen(false): () => setEdit(false)}
                children={open ? <RegisterProcess onClose={() => setOpen(false)}/> : <EditProcess processId={processId} onClose={() => setEdit(false)} />}
            />
            <div className="content-button">
                <button onClick={() => setOpen(true)} >Criar novo processo</button>
            </div>
        </Container>
    )
}