import { UserDTO } from "../../dtos/UserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";


class UserRepository implements IUserRepository {

    usersList: User[] = [];

    createUser({ name, email, password }: UserDTO) {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password
        });

        this.usersList.push(user);
    }

    findByEmail(email: string): User {
        const user = this.usersList.find(user => user.email === email);
        return user;
    }

}

export { UserRepository };