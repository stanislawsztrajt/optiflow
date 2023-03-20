import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<import("./schemas/books.schema").Book>;
    findAll(): Promise<import("./schemas/books.schema").Book[]>;
    findOne(_id: string): Promise<import("./schemas/books.schema").Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<import("./schemas/books.schema").Book>;
    remove(id: string): Promise<import("./schemas/books.schema").Book>;
}
