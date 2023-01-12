import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PrivateLessonsService } from './private-lessons.service';
import { CreatePrivateLessonDto } from './dto/create-private-lesson.dto';
import { UpdatePrivateLessonDto } from './dto/update-private-lesson.dto';
import { OwnerGuard } from '../../core/guards/owner.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('private-lessons')
export class PrivateLessonsController {
  constructor(private readonly privateLessonsService: PrivateLessonsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPrivateLessonDto: CreatePrivateLessonDto) {
    return this.privateLessonsService.create(createPrivateLessonDto);
  }

  @Get()
  findAll() {
    return this.privateLessonsService.findAll({});
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.privateLessonsService.findOne({ _id });
  }

  @UseGuards(JwtAuthGuard, OwnerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrivateLessonDto: UpdatePrivateLessonDto) {
    return this.privateLessonsService.update(id, updatePrivateLessonDto);
  }

  @UseGuards(JwtAuthGuard, OwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privateLessonsService.remove(id);
  }
}
