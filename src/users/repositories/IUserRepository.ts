import { IUserDTO } from "../dtos/IUserDTO";
import { User } from "../entities/User";



interface IUserRepository {
    createUser(data: IUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User | undefined>;
}

export { IUserRepository };