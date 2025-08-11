import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamificacionService } from './gamificacion.service';
import { CreateGamificacionDto } from './dto/create-gamificacion.dto';
import { UpdateGamificacionDto } from './dto/update-gamificacion.dto';

@Controller('gamificacion') 
export class GamificacionController {
  constructor(private readonly gamificacionService: GamificacionService) {}

  @Post()
  create(@Body() createGamificacionDto: CreateGamificacionDto) {
    return "Aquí se creará una nueva gamificación";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todas las gamificaciones";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar la gamificación con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar la gamificación con ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar la gamificación con ID: ${id}`;
  }
}
