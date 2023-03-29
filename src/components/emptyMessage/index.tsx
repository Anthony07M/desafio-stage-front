import { Container } from "./styles";

interface EmptyMessageProps {
    message: string;
    isCenter?: boolean
}
export const EmptyMessage = ({ message, isCenter=false }: EmptyMessageProps) => {
    return (
        <Container isCenter={isCenter}>
            <p>{message}</p>
        </Container>
    );
}