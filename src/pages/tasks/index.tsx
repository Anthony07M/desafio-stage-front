import { useEffect, useState } from "react"
import { RegisterTask } from "../../components/forms/registerTask"
import { SideSheet } from "../../components/sidesheets"
import { Container } from "./styles"
import "react-datepicker/dist/react-datepicker.css";
import { requestsTasks } from "../../services/requests"
import { TasksTable } from "../../components/tables/tasks"

export const TaskPage = () => {
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    const listTasks = async () => {
        const tasks = await requestsTasks.findAll();
        setTasks(tasks);
    }

    useEffect(() => {
        listTasks()
    }, [])

    return (
        <Container>
            <h1>Tasks</h1>
            <main>
                <TasksTable data={tasks} />
            </main>
            <SideSheet
                isOpen={open}
                title='Cadastro de tarefas'
                onClose={() => setOpen(false)}
                children={<RegisterTask />}
            />
            <div className="content-button">
                <button onClick={() => setOpen(true)}>Criar nova tarefa</button>
            </div>
        </Container>
    )
}