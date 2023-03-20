import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(query: FilterQuery<User>): Promise<User[]>;
    findOne(query: FilterQuery<User>): Promise<User>;
    isAlreadyExist(login: string): Promise<boolean>;
    craete(user: User): Promise<User>;
    update(id: string, user: User): Promise<User>;
    remove(id: string): Promise<User>;
}
