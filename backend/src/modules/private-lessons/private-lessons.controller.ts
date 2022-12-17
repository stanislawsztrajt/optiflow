import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrivateLessonsService } from './private-lessons.service';
import { CreatePrivateLessonDto } from './dto/create-private-lesson.dto';
import { UpdatePrivateLessonDto } from './dto/update-private-lesson.dto';

@Controller('private-lessons')
export class PrivateLessonsController {
  constructor(private readonly privateLessonsService: PrivateLessonsService) {}

  @Post()
  create(@Body() createPrivateLessonDto: CreatePrivateLessonDto) {
    return this.privateLessonsService.create(createPrivateLessonDto);
  }

  @Get()
  findAll() {
    return this.privateLessonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.privateLessonsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrivateLessonDto: UpdatePrivateLessonDto) {
    return this.privateLessonsService.update(id, updatePrivateLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privateLessonsService.remove(id);
  }
}
