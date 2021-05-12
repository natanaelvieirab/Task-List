import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {

    usersList: User[] = [];

    async createUser({ name, email, password }: IUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password,
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.usersList.push(user);
        console.log(this.usersList);
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.usersList.find(user => user.email === email);
        return user;
    }

    async findById(id: string): Promise<User> {
        return this.usersList.find(user => user.id === id);
    }

    async updateUser({ id, password, name }: IUpdateUserDTO): Promise<User> {
        const position = this.usersList.findIndex(user => user.id === id);

        Object.assign(this.usersList[position], {
            password,
            name,
        });

        return this.usersList[position];
    }

    async deleteUser(id: string): Promise<void> {
        const positionUser = this.usersList.findIndex(user => user.id === id);

        this.usersList.splice(positionUser, 1);
    }
}

export { UsersRepository };