import { Container } from "./styles";

interface TaskProps {
    id: string,
    name: string,
    title: string,
    subtitle: string,
    date: Date,
    user: {
        name: string,
        avatarUrl: string;
    }
}

export const Task = ({ id, name, title, subtitle, date, user }: TaskProps) => {
    return (
        <Container>
            <input type="checkbox" value={1} checked onChange={(event) => console.log(event.target.value)} />
            <div className="content content-titles">
                <p>{name}</p>
                <p>{title} - {subtitle}</p>
            </div>
            <div className="content content-date">
                {date.toUTCString()}
            </div>
            <div className="content content-user">
                <img src={user.avatarUrl} alt={user.name} />
            </div>
        </Container>
    );
}