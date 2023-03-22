import { Task } from "../../components/task"
import { Container } from "./styles"

export const TaskPage = () => {
    return (
        <Container>
            <h1>Task</h1>
            <Task
                name="Name task"
                subtitle="Project subtitle"
                title="Title project"
                date={new Date()}
                user={{
                    name: 'Anthony',
                    avatarUrl: 'https://github.com/anthony07m.png'
                }}
                id='calkscalscjls'
            />
        </Container>
    )
}