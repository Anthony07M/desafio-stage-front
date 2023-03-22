import { Process } from "../../components/process"
import { Container } from "./styles"

export const Home = () => {
    return (
        <Container>
            <h1>Home Page</h1>
            <Process
                title="Title for title"
                subtitle="Sub for title"
                task="task lorem task lorem"
            />
            <Process
                title="Title for title"
                subtitle="Sub for title"
                task="task lorem task lorem"
            />
            <Process
                title="Title for title"
                subtitle="Sub for title"
                task="task lorem task lorem"
            />
            <Process
                title="Title for title"
                subtitle="Sub for title"
                task="task lorem task lorem"
            />
        </Container>
    )
}