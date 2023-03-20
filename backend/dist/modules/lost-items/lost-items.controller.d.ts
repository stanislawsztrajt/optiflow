import { LostItemsService } from './lost-items.service';
import { CreateLostItemDto } from './dto/create-lost-item.dto';
import { UpdateLostItemDto } from './dto/update-lost-item.dto';
export declare class LostItemsController {
    private readonly lostItemsService;
    constructor(lostItemsService: LostItemsService);
    create(createLostItemDto: CreateLostItemDto): Promise<import("./schemas/lost-items.schema").LostItem>;
    findAll(): Promise<import("./schemas/lost-items.schema").LostItem[]>;
    findOne(_id: string): Promise<import("./schemas/lost-items.schema").LostItem>;
    update(id: string, updateLostItemDto: UpdateLostItemDto): Promise<import("./schemas/lost-items.schema").LostItem>;
    remove(id: string): Promise<import("./schemas/lost-items.schema").LostItem>;
}
