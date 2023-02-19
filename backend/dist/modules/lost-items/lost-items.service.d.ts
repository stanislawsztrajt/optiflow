import { FilterQuery, Model } from 'mongoose';
import { CreateLostItemDto } from './dto/create-lost-item.dto';
import { UpdateLostItemDto } from './dto/update-lost-item.dto';
import { LostItem } from './schemas/lost-items.schema';
export declare class LostItemsService {
    private readonly lostItemModel;
    constructor(lostItemModel: Model<LostItem>);
    create(createLostItemDto: CreateLostItemDto): Promise<LostItem>;
    findAll(query: FilterQuery<LostItem>): Promise<LostItem[]>;
    findOne(query: FilterQuery<LostItem>): Promise<LostItem>;
    update(id: string, updateLostItemDto: UpdateLostItemDto): Promise<LostItem>;
    remove(id: string): Promise<LostItem>;
}
