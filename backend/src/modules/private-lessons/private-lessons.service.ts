import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreatePrivateLessonDto } from './dto/create-private-lesson.dto';
import { UpdatePrivateLessonDto } from './dto/update-private-lesson.dto';
import { PrivateLesson } from './schemas/private-lessons.schema';

@Injectable()
export class PrivateLessonsService {
  constructor(@InjectModel(PrivateLesson.name) private privateLessonModel: Model<PrivateLesson>) {}

  async create(createPrivateLessonDto: CreatePrivateLessonDto): Promise<PrivateLesson> {
    const createdPrivateLesson = new this.privateLessonModel(createPrivateLessonDto);
    return createdPrivateLesson.save();
  }

  async findAll(query: FilterQuery<PrivateLesson>): Promise<PrivateLesson[]> {
    return this.privateLessonModel.find(query).exec();
  }

  async findOne(query: FilterQuery<PrivateLesson>): Promise<PrivateLesson> {
    return this.privateLessonModel.findOne(query).exec();
  }

  async update(id: string, updatePrivateLessonDto: UpdatePrivateLessonDto): Promise<PrivateLesson> {
    return this.privateLessonModel.findByIdAndUpdate(id, updatePrivateLessonDto, { new: true });
  }

  async remove(id: string): Promise<PrivateLesson> {
    return this.privateLessonModel.findByIdAndRemove(id);
  }
}
