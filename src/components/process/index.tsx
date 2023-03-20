import { Container } from "./styles";

interface ProcessProps {
    title: string;
    subtitle: string;
    task: string;
}

export const Process = (process: ProcessProps) => {
    return (
        <Container>
            <h2>{(process.title).toUpperCase()}</h2>
            <h3>{process.subtitle}</h3>
            <div className="progress-bar" ></div>
            <div className="status">
                <p>status</p>
                <p>0/1</p>
            </div>
            <p>Tarefa: {process.task}</p>
            <div className="imgs">
                <img src="https://github.com/Anthony07M.png" alt="user" />
                <img src="https://github.com/Anthony07M.png" alt="user" />
                <img src="https://github.com/Anthony07M.png" alt="user" />
            </div>
        </Container>
    );
}