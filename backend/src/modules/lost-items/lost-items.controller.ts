import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LostItemsService } from './lost-items.service';
import { CreateLostItemDto } from './dto/create-lost-item.dto';
import { UpdateLostItemDto } from './dto/update-lost-item.dto';
import { OwnerGuard } from '../../core/guards/owner.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('lost-items')
export class LostItemsController {
  constructor(private readonly lostItemsService: LostItemsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLostItemDto: CreateLostItemDto) {
    return this.lostItemsService.create(createLostItemDto);
  }

  @Get()
  findAll() {
    return this.lostItemsService.findAll({});
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.lostItemsService.findOne({ _id });
  }

  @UseGuards(JwtAuthGuard, OwnerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLostItemDto: UpdateLostItemDto) {
    return this.lostItemsService.update(id, updateLostItemDto);
  }

  @UseGuards(JwtAuthGuard, OwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lostItemsService.remove(id);
  }
}
