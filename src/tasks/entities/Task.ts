import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "../../users/entities/User";

@Entity("tasks")
class Task {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    done: boolean;

    @Column()
    id_user: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user' })
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.done = false;
        }
    }
}

export { Task };