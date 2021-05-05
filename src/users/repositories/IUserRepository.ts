import { IUserDTO } from "../dtos/IUserDTO";
import { User } from "../entities/User";


interface IUserRepository {
    createUser(data: IUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User>;
}

export { IUserRepository };