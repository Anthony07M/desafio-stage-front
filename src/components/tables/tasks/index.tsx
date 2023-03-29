import { Table } from "./styles";

type taskType = {
    id: string,
    name: string,
    summary: string,
    expiresIn: Date,
    createdAt: string;
    users: Array<{ avatarUrl: string, name: string }>;
}


interface TaskTableProps {
    data: taskType[],
}

export const TasksTable = ({ data }: TaskTableProps) => {
    return (
        <>
            <Table>
                <tr>
                    <th>Nome</th>
                    <th>Resumo</th>
                    <th>Data de criação</th>
                    <th>Responsáveis</th>
                </tr>
                {data.map((task) => {
                    return (
                        <tr>
                            <td>{task.name}</td>
                            <td>{task.summary}</td>
                            <td>{task.createdAt}</td>
                            <td>{task.users.map(user => user.name)}</td>
                        </tr>
                    )
                })}
            </Table>
        </>
    );
};
