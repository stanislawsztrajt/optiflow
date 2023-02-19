import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OwnerGuard } from '../../core/guards/owner.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Throttle } from '@nestjs/throttler'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Throttle(6, 60)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll({});
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.booksService.findOne({ _id });
  }

  @UseGuards(JwtAuthGuard, OwnerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @UseGuards(JwtAuthGuard, OwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
