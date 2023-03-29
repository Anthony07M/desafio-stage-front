import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form"
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { Select } from "../../../components/select";
import { requests, requestsProcess } from "../../../services/requests";
import { Input } from "../../input";
import { Container, Form, ListTasks, Section, Task } from "./styles"

interface RegisterProcessProps {
    onClose: () => void;
}

export const RegisterProcess = ({ onClose }: RegisterProcessProps) => {
    const {
        handleSubmit,
        control,
        getValues,
        reset,
        resetField,
        formState: { errors, isValid, isSubmitting }
    } = useForm();

    const [tasks, setTasks] = useState<any[]>([]);
    const [tasksProcess, setTasksProcess] = useState<any[]>([]);
    const [users, setUsers] = useState([])
    const [opensubprocess, setOpenSubprocess] = useState(false)

    const addTask = () => {
        const task = {
            name: getValues('name'),
            summary: getValues('summary'),
            tag: getValues('tag'),
            expiresIn: "2023-03-19T17:30:10.516Z",
            users: [
                { id: getValues('userId') }
            ],
        }

        resetField('name')
        resetField('summary')
        resetField('tag')
        resetField('userId')

        setTasks([task, ...tasks]);
    }

    const addTaskForSubprocess = () => {
        const task = {
            name: getValues('nameTaskProcess'),
            summary: getValues('summaryTaskProcess'),
            tag: getValues('tagTaskProcess'),
            expiresIn: "2023-03-19T17:30:10.516Z",
            users: [
                { id: getValues('userIdTaskProcess') }
            ],
        }

        resetField('nameTaskProcess')
        resetField('summaryTaskProcess')
        resetField('tagTaskProcess')
        resetField('userIdTaskProcess')

        setTasksProcess([task, ...tasksProcess]);
    }

    const removeTask = (index: number) => {
        setTasks(tasks.filter((_, idx) => idx !== index))
    }

    const getUsers = async () => {
        const response = await requests.getUsers();
        setUsers(response.map((user: any) => { return { value: user.id, label: user.name } }))
    }

    const createProcess = async (data: any) => {
        const process = {
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
            tasks,
            subprocess: tasksProcess.length > 0 ? [{
                name: getValues('nameSubprocess'),
                description: getValues('descriptionSubprocess'),
                tasks: tasksProcess,
            }] : [],
        }
        await requestsProcess.createProcess(process);
        reset()
        onClose()
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Container>
            <Form onSubmit={handleSubmit(createProcess)}>
                <Section>
                    <div>
                        <h2>Processo</h2>
                    </div>
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=''
                        render={({ field: { name, onChange, value, ref } }) => (
                            <Input
                                label="Título"
                                type="text"
                                placeholder="Digite um título para o processo"
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                error={errors?.title?.type === 'required'}
                            />
                        )}
                    />
                    <Controller
                        name="subtitle"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=''
                        render={({ field: { name, onChange, value, ref } }) => (
                            <Input
                                label="Subtítulo"
                                type="text"
                                placeholder="Digite um subtítulo para o processo"
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                error={errors?.subtitle?.type === 'required'}
                            />
                        )}
                    />
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=''
                        render={({ field: { name, onChange, value, ref } }) => (

                            <Input
                                label="Descrição"
                                type="text"
                                placeholder="Digite uma descrição para o processo"
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                error={errors?.tag?.type === 'required'}
                            />
                        )}
                    />
                </Section>
                <Section>
                    <div>
                        <h2>Tarefas:</h2>
                    </div>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=''
                        render={({ field: { name, onChange, value, ref } }) => (
                            <Input
                                label="Nome"
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
                        name="summary"
                        control={control}
                        defaultValue=''
                        render={({ field: { name, onChange, value, ref } }) => (
                            <Input
                                label="Resumo"
                                type="text"
                                placeholder="Descrição da tarefa"
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                error={errors?.summary?.type === 'required'}
                            />
                        )}
                    />
                    <Controller
                        name="tag"
                        control={control}
                        defaultValue=''
                        render={({ field: { name, onChange, value, ref } }) => (

                            <Input
                                label="Tag"
                                type="text"
                                placeholder="Informe uma tag"
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                error={errors?.tag?.type === 'required'}
                            />
                        )}
                    />
                    <div className="content-select">
                        <Controller
                            name="userId"
                            control={control}
                            defaultValue=''
                            render={({ field: { onChange } }) => {
                                return (
                                    <Select
                                        label="Responsável"
                                        options={users}
                                        onSelect={onChange}
                                    />
                                )
                            }}
                        />
                    </div>
                    <div className="content-button">
                        <button className="outlined" type="button" onClick={addTask} >ADICIONAR</button>
                    </div>
                    <ListTasks>
                        <span>Tarefas</span>
                        {tasks.length ? (
                            tasks.map((task, index) => {
                                return (
                                    <Task key={index}>
                                        <p>{task.name}</p>
                                        <p>{task.tag}</p>
                                        <p>{task.tag}</p>
                                        <AiFillDelete onClick={() => removeTask(index)} />
                                    </Task>
                                );
                            })
                        ) : (
                            <div className="empty">
                                <p>Não há tarefas criadas no momento!</p>
                            </div>
                        )
                        }
                    </ListTasks>
                </Section>
                <Section>
                    <h2>Subprocessos</h2>
                    {opensubprocess && (
                        <>
                            <Controller
                                name="nameSubprocess"
                                control={control}
                                rules={{ required: true }}
                                defaultValue=''
                                render={({ field: { name, onChange, value, ref } }) => (
                                    <Input
                                        label="Título"
                                        type="text"
                                        placeholder="Digite um nome para o subprocesso"
                                        onChange={onChange}
                                        value={value}
                                        ref={ref}
                                        error={errors?.nameSubprocess?.type === 'required'}
                                    />
                                )}
                            />
                            <Controller
                                name="descriptionSubprocess"
                                control={control}
                                rules={{ required: true }}
                                defaultValue=''
                                render={({ field: { name, onChange, value, ref } }) => (
                                    <Input
                                        label="Subtítulo"
                                        type="text"
                                        placeholder="Digite uma descrição para o subprocesso"
                                        onChange={onChange}
                                        value={value}
                                        ref={ref}
                                        error={errors?.descriptionSubprocess?.type === 'required'}
                                    />
                                )}
                            />
                            <div>
                                <h2>Tarefas do subprocesso</h2>
                            </div>
                            <Controller
                                name="nameTaskProcess"
                                control={control}
                                defaultValue=''
                                render={({ field: { name, onChange, value, ref } }) => (
                                    <Input
                                        label="Nome"
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
                                name="summaryTaskProcess"
                                control={control}
                                defaultValue=''
                                render={({ field: { name, onChange, value, ref } }) => (
                                    <Input
                                        label="Resumo"
                                        type="text"
                                        placeholder="Descrição da tarefa"
                                        onChange={onChange}
                                        value={value}
                                        ref={ref}
                                        error={errors?.summary?.type === 'required'}
                                    />
                                )}
                            />
                            <Controller
                                name="tagTaskProcess"
                                control={control}
                                defaultValue=''
                                render={({ field: { name, onChange, value, ref } }) => (

                                    <Input
                                        label="Tag"
                                        type="text"
                                        placeholder="Informe uma tag"
                                        onChange={onChange}
                                        value={value}
                                        ref={ref}
                                        error={errors?.tag?.type === 'required'}
                                    />
                                )}
                            />
                            <div className="content-select">
                                <Controller
                                    name="userIdTaskProcess"
                                    control={control}
                                    defaultValue=''
                                    render={({ field: { onChange } }) => {
                                        return (
                                            <Select
                                                label="Responsável"
                                                options={users}
                                                onSelect={onChange}
                                            />
                                        )
                                    }}
                                />
                            </div>
                            <div className="content-button">
                                <button className="outlined" type="button" onClick={addTaskForSubprocess} >ADICIONAR</button>
                            </div>
                            <ListTasks>
                                <span>Tarefas</span>
                                {tasks.length ? (
                                    tasksProcess.map((task, index) => {
                                        return (
                                            <Task key={index}>
                                                <p>{task.name}</p>
                                                <p>{task.tag}</p>
                                                <p>{task.tag}</p>
                                                <AiFillDelete onClick={() => removeTask(index)} />
                                            </Task>
                                        );
                                    })
                                ) : (
                                    <div className="empty">
                                        <p>Não há tarefas criadas no momento!</p>
                                    </div>
                                )
                                }
                            </ListTasks>
                        </>
                    )}
                    <div className="content-button button-save">
                        <button type="button" className="outlined" onClick={() => setOpenSubprocess(!opensubprocess)}>CRIAR <AiOutlinePlus /></button>
                    </div>
                </Section>

                <div className="content-button button-save">
                    <button type="submit" disabled={!isValid} >{isSubmitting ? 'salvando....' : 'SALVAR'}</button>
                </div>
            </Form>
        </Container >
    )
}