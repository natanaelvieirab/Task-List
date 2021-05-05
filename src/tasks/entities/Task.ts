import { v4 as uuidV4 } from "uuid";


class Task {

    id: string;
    title: string;
    description: string;
    done: boolean;
    id_user: string;
    created_at: Date;
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.done = false;
        }
    }
}

export { Task };