import { Input } from "../../input"
import { Select } from "../../select"
import { Container, Form, ListTasks, Task } from "./styles"
import { Controller, useForm } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { requests, requestsTasks } from '../../../services/requests'

export const RegisterTask = () => {
    const { handleSubmit, control, reset, formState: { errors, touchedFields, isValid, } } = useForm();

    const [tasks, setTasks] = useState<any[]>([]);
    const [users, setUsers] = useState([])
    const [process, setProcess] = useState([])


    const addTask = (task: any) => {
        const { userId, ...rest } = task;

        setTasks([
            { ...rest, expiresIn: "2023-03-19T17:30:10.516Z", users: [{ id: task.userId }] },
            ...tasks
        ]);
        reset()
    }

    const removeTask = (index: number) => {
        setTasks(tasks.filter((_, idx) => idx !== index))
    }

    const getUsers = async () => {
        const response = await requests.getUsers();
        setUsers(response.map((user: any) => { return { value: user.id, label: user.name } }))
    }

    const getProcess = async () => {
        const response = await requests.getProcess();
        setProcess(response.map((process: any) => { return { value: process.id, label: process.title } }))
    }

    const createTask = async () => {
        await requestsTasks.createTask(tasks)
        setTasks([])
    }

    useEffect(() => {
        getUsers()
        getProcess()
    }, [])

    return (
        <Container>
            <Form onSubmit={handleSubmit(data => addTask(data))}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
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
                    rules={{ required: true }}
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
                    rules={{ required: true }}
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

                    <Controller
                        name="userId"
                        control={control}
                        defaultValue=''
                        rules={{ required: true }}
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
                    <button type="submit" disabled={!isValid} >ADICIONAR</button>
                </div>
            </Form>

            <span>Tarefas:</span>
            <ListTasks>
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
            <div className="content-button">
                <button onClick={createTask} disabled={tasks.length < 1} >SALVAR</button>
            </div>
        </Container>
    )
}