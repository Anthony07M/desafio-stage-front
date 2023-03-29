import { Container } from "./styles";

interface AreaProps {
    areaId: string,
    name: string,
    description: string,
    _count: {
        process: number,
    },
    onClick: (areaId: string) => void;
}

export const Area = ({
    areaId,
    name,
    description,
    _count,
    onClick
}: AreaProps) => {
    return (
        <Container onClick={() => onClick(areaId)}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
                <span>Processos:</span>
                <span>{_count.process}</span>
            </div>
        </Container>
    );
};
