import { PrivateLessonsService } from './private-lessons.service';
import { CreatePrivateLessonDto } from './dto/create-private-lesson.dto';
import { UpdatePrivateLessonDto } from './dto/update-private-lesson.dto';
export declare class PrivateLessonsController {
    private readonly privateLessonsService;
    constructor(privateLessonsService: PrivateLessonsService);
    create(createPrivateLessonDto: CreatePrivateLessonDto): Promise<import("./schemas/private-lessons.schema").PrivateLesson>;
    findAll(): Promise<import("./schemas/private-lessons.schema").PrivateLesson[]>;
    findOne(_id: string): Promise<import("./schemas/private-lessons.schema").PrivateLesson>;
    update(id: string, updatePrivateLessonDto: UpdatePrivateLessonDto): Promise<import("./schemas/private-lessons.schema").PrivateLesson>;
    remove(id: string): Promise<import("./schemas/private-lessons.schema").PrivateLesson>;
}
