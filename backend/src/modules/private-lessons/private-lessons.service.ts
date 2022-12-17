import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  async findAll(): Promise<PrivateLesson[]> {
    return this.privateLessonModel.find().exec();
  }

  async findOne(id: string): Promise<PrivateLesson> {
    return this.privateLessonModel.findById(id).exec();
  }

  async update(id: string, updatePrivateLessonDto: UpdatePrivateLessonDto): Promise<PrivateLesson> {
    return this.privateLessonModel.findByIdAndUpdate(id, updatePrivateLessonDto, { new: true });
  }

  async remove(id: string): Promise<PrivateLesson> {
    return this.privateLessonModel.findByIdAndRemove(id);
  }
}