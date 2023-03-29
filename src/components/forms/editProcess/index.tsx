import { Input } from "../../input"
import { Container, Form } from "./styles"
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from "react";
import { requestsProcess } from '../../../services/requests'

interface EditProcessProps {
    processId: string;
    onClose: () => void;
}

export const EditProcess = ({ processId, onClose }: EditProcessProps) => {
    const { handleSubmit, control, setValue, getValues, formState: { errors, isSubmitting } } = useForm();

    const deleteProcess = async () => {
        await requestsProcess.delete(processId);
        onClose()
    }

    const saveProcess = async () => {
        const process = {
            title: getValues('title'),
            subtitle: getValues('subtitle'),
            description: getValues('description'),
        }

        await requestsProcess.update(processId, process);
        onClose()
    }

    useEffect(() => {
        (async () => {
            const process = await requestsProcess.getProcessPerId(processId);
            setValue('title', process?.title)
            setValue('subtitle', process?.subtitle)
            setValue('description', process?.description)
        })()
    }, [])


    return (
        <Container>
            <Form onSubmit={handleSubmit(data => console.log(data))}>
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=''
                    render={({ field: { onChange, value, ref } }) => (
                        <Input
                            label="Título"
                            type="text"
                            placeholder="Digite o nome da tarefa"
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
                            placeholder="Descrição do processo"
                            onChange={onChange}
                            value={value}
                            ref={ref}
                            error={errors?.description?.type === 'required'}
                        />
                    )}
                />
                <Controller
                    name="subtitle"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=''
                    render={({ field: { onChange, value, ref } }) => (

                        <Input
                            label="Subtítulo"
                            type="text"
                            placeholder="Informe um subtítulo"
                            onChange={onChange}
                            value={value}
                            ref={ref}
                            error={errors?.subtitle?.type === 'required'}
                        />
                    )}
                />
                <div className="content-button">
                    <button onClick={saveProcess} >{isSubmitting ? 'salvando... ' : 'SALVAR'}</button>
                    <button id="deleted" onClick={deleteProcess} >{isSubmitting ? 'deletando...' : 'DELETAR'}</button>
                </div>
            </Form>

        </Container >
    )
}