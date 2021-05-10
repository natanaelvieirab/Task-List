

interface IUpdateTaskDTO {
    id: string;
    title: string;
    description: string;
    id_user?: string;
    created_at?: Date;
}

export { IUpdateTaskDTO };