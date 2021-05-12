import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { IUserDTO } from "../dtos/IUserDTO";
import { User } from "../entities/User";


interface IUsersRepository {
    createUser(data: IUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    updateUser(data: IUpdateUserDTO): Promise<User>;
    deleteUser(id: string): Promise<void>;
}

export { IUsersRepository };