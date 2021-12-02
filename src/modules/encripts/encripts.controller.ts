import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EncriptsService } from './encripts.service';
import { Encript } from '../../entities/encript.entity'

@Controller('encripts')
export class EncriptsController {
  constructor(private readonly encriptsService: EncriptsService) { }

  @Post()
  create(@Body() data: Encript) {
    return this.encriptsService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encriptsService.findOne(+id);
  }
}
