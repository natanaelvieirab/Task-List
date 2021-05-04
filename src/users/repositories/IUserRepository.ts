import { UserDTO } from "../dtos/UserDTO";
import { User } from "../entities/User";



interface IUserRepository {
    createUser(data: UserDTO);
    findByEmail(email: string): User;
}

export { IUserRepository };