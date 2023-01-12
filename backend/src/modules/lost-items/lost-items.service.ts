import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateLostItemDto } from './dto/create-lost-item.dto';
import { UpdateLostItemDto } from './dto/update-lost-item.dto';
import { LostItem } from './schemas/lost-items.schema';

export class LostItemsService {
  constructor(@InjectModel(LostItem.name) private readonly lostItemModel: Model<LostItem>) {}

  async create(createLostItemDto: CreateLostItemDto): Promise<LostItem> {
    const createdLostItem = new this.lostItemModel(createLostItemDto);
    return await createdLostItem.save();
  }

  async findAll(query: FilterQuery<LostItem>): Promise<LostItem[]> {
    return await this.lostItemModel.find(query).exec();
  }

  async findOne(query: FilterQuery<LostItem>): Promise<LostItem> {
    return await this.lostItemModel.findById(query).exec();
  }

  async update(id: string, updateLostItemDto: UpdateLostItemDto): Promise<LostItem> {
    return await this.lostItemModel.findByIdAndUpdate(id, updateLostItemDto, { new: true }).exec();
  }

  async remove(id: string): Promise<LostItem> {
    const removedLostItem = await this.lostItemModel.findByIdAndRemove(id).exec();
    if (!removedLostItem) {
      throw new NotFoundException();
    }
    return removedLostItem;
  }
}
