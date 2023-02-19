import { FilterQuery, Model } from 'mongoose';
import { CreatePrivateLessonDto } from './dto/create-private-lesson.dto';
import { UpdatePrivateLessonDto } from './dto/update-private-lesson.dto';
import { PrivateLesson } from './schemas/private-lessons.schema';
export declare class PrivateLessonsService {
    private privateLessonModel;
    constructor(privateLessonModel: Model<PrivateLesson>);
    create(createPrivateLessonDto: CreatePrivateLessonDto): Promise<PrivateLesson>;
    findAll(query: FilterQuery<PrivateLesson>): Promise<PrivateLesson[]>;
    findOne(query: FilterQuery<PrivateLesson>): Promise<PrivateLesson>;
    update(id: string, updatePrivateLessonDto: UpdatePrivateLessonDto): Promise<PrivateLesson>;
    remove(id: string): Promise<PrivateLesson>;
}
