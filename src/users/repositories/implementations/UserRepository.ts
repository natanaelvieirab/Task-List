import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";


class UserRepository implements IUserRepository {

    usersList: User[] = [];

    async createUser({ name, email, password }: IUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password,
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.usersList.push(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.usersList.find(user => user.email === email);
        return user;
    }

}

export { UserRepository };