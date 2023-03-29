import { Container } from "./styles";

interface ProcessProps {
    title: string;
    subtitle: string;
    task: string;
    onClick: () => void;
}

export const Process = ({ title, onClick, subtitle, task}: ProcessProps) => {
    return (
        <Container onClick={onClick}>
            <h2>{(title).toUpperCase()}</h2>
            <h3>{subtitle}</h3>
            <div className="progress-bar" ></div>
            <div className="status">
                <p>status</p>
                <p>0/1</p>
            </div>
            <p className="task">Tarefa: {task}</p>
            <div className="imgs">
                <img src="https://github.com/Anthony07M.png" alt="user" />
                <img src="https://github.com/Anthony07M.png" alt="user" />
                <img src="https://github.com/Anthony07M.png" alt="user" />
            </div>
        </Container>
    );
}