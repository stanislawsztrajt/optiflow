import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(query: FilterQuery<User>): Promise<User[]> {
    return await this.userModel.find(query).exec();
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return await this.userModel.findOne(query).exec();
  }

  async isAlreadyExist(login: string): Promise<boolean> {
    const user = await this.findOne({ login });
    if (user) {
      return true;
    }
    return false;
  }

  async craete(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async update(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user);
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }
}
