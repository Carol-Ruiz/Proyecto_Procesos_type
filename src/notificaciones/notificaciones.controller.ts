import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';

@Controller('notificaciones')  
export class NotificacionesController {
  constructor(private readonly notificacionesService: NotificacionesService) {}

  @Post()
  create(@Body() createNotificacioneDto: CreateNotificacioneDto) {
    return "Aquí se creará una nueva notificación";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todas las notificaciones";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar la notificación con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar la notificación con ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar la notificación con ID: ${id}`;
  }
}
