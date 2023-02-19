import { UsersService } from './users.service';
import { PrivateLessonsService } from '../private-lessons/private-lessons.service';
import { BooksService } from '../books/books.service';
import { EventsService } from '../events/events.service';
import { LostItemsService } from '../lost-items/lost-items.service';
export declare class UsersController {
    private readonly usersService;
    private readonly booksService;
    private readonly eventsService;
    private readonly lostItemsService;
    private readonly privateLessonsService;
    constructor(usersService: UsersService, booksService: BooksService, eventsService: EventsService, lostItemsService: LostItemsService, privateLessonsService: PrivateLessonsService);
    findAll(): Promise<import("./schemas/users.schema").User[]>;
    findOneById(_id: string): Promise<import("./schemas/users.schema").User>;
    findUserAll(_id: string): Promise<{
        books: import("../books/schemas/books.schema").Book[];
        events: import("../events/schemas/events.schema").Event[];
        lostItems: import("../lost-items/schemas/lost-items.schema").LostItem[];
        privateLessons: import("../private-lessons/schemas/private-lessons.schema").PrivateLesson[];
    }>;
    findUserAllCount(_id: string): Promise<{
        books: number;
        events: number;
        lostItems: number;
        privateLessons: number;
    }>;
    findUserBooks(_id: string): Promise<import("../books/schemas/books.schema").Book[]>;
    findUserEvents(_id: string): Promise<import("../events/schemas/events.schema").Event[]>;
    findUserLostItems(_id: string): Promise<import("../lost-items/schemas/lost-items.schema").LostItem[]>;
    findUserPrivateLessons(_id: string): Promise<import("../private-lessons/schemas/private-lessons.schema").PrivateLesson[]>;
}
