import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, Query } from '@nestjs/common';

//CRUD - Create, Read, Update, Delete

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService
  ) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get()
  async findMany(
    @Query('name') name: string,
    @Query('username') username: string
  ) {
    return this.usersService.findMany(name, username);
  }

  @Post()
  async create(@Body() data: any) {
    return this.usersService.create(data);
  }

  @Put()
  async update(){
    return this.usersService.update();
  }

  @Patch()
  async updatePhoto() {
    return this.usersService.updatePhoto();
  }

  @Delete()
  async delete() {
    return this.usersService.delete();
  }
}
