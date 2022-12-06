import { Injectable } from '@nestjs/common';
import { CreateLostItemDto } from './dto/create-lost-item.dto';
import { UpdateLostItemDto } from './dto/update-lost-item.dto';

@Injectable()
export class LostItemsService {
  create(createLostItemDto: CreateLostItemDto) {
    return 'This action adds a new lostItem';
  }

  findAll() {
    return `This action returns all lostItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lostItem`;
  }

  update(id: number, updateLostItemDto: UpdateLostItemDto) {
    return `This action updates a #${id} lostItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} lostItem`;
  }
}
