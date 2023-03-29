import { Input } from "../../input"
import { Container, Form } from "./styles"
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { requestsProcess, requestsArea } from '../../../services/requests'
import { Select } from "../../../components/select";

interface RegisterAreaProps {
    onClose: () => void;
    areaId?: string;
}

export const RegisterArea = ({ onClose, areaId }: RegisterAreaProps) => {
    const { handleSubmit, control, setValue, formState: { errors, isSubmitting, } } = useForm();
    const [process, setProcess] = useState([]);

    const saveArea = async (area: any) => {
        await requestsArea.create({ name: area.name, description: area.description, process: [] });
        onClose()
    }

    useEffect(() => {
        (async () => {
            if (areaId) {
                const area = await requestsArea.getAreaById(areaId);
                setValue('name', area.name)
                setValue('description', area.description)
            } else {
                const response = await requestsProcess.getProcess();
                setProcess(response.map((process: any) => { return { value: process.id, label: process.title } }))
            }
        })()
    }, [])

    return (
        <Container>
            <Form onSubmit={handleSubmit(data => saveArea(data))}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=''
                    render={({ field: { onChange, value, ref } }) => (
                        <Input
                            label="Título"
                            type="text"
                            placeholder="Digite o nome da Area"
                            onChange={onChange}
                            value={value}
                            ref={ref}
                            error={errors?.name?.type === 'required'}
                        />
                    )}
                />
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=''
                    render={({ field: { onChange, value, ref } }) => (
                        <Input
                            label="Descrição"
                            type="text"
                            placeholder="Descrição da Area"
                            onChange={onChange}
                            value={value}
                            ref={ref}
                            error={errors?.description?.type === 'required'}
                        />
                    )}
                />
                <div className="content-selects">
                    <Controller
                        name="processId"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=''
                        render={({ field: { onChange, } }) => {
                            return (
                                <Select
                                    label="Processo"
                                    options={process}
                                    onSelect={onChange}
                                />
                            )
                        }}
                    />
                </div>
                <div className="content-button">
                    {areaId && <button>DELETAR</button>}
                    <button type="submit" >{isSubmitting ? 'salvando... ' : 'SALVAR'}</button>
                </div>
            </Form>

        </Container >
    )
}