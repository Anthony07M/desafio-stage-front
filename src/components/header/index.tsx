import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Menu = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <Link to="/tarefas">Tarefas</Link>
            <Link to="/areas">Áreas</Link>
        </Container>
    );
}