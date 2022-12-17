import { NotFoundException } from "@nestjs/common/exceptions";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateLostItemDto } from "./dto/create-lost-item.dto";
import { UpdateLostItemDto } from "./dto/update-lost-item.dto";
import { LostItem } from "./schemas/lost-items.schema";

export class LostItemsService {
  constructor(@InjectModel(LostItem.name) private readonly lostItemModel: Model<LostItem>) {}

  async create(createLostItemDto: CreateLostItemDto): Promise<LostItem> {
    const createdLostItem = new this.lostItemModel(createLostItemDto);
    return await createdLostItem.save();
  }

  async findAll(): Promise<LostItem[]> {
    return await this.lostItemModel.find().exec();
  }

  async findOne(id: string): Promise<LostItem> {
    return await this.lostItemModel.findById(id).exec();
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