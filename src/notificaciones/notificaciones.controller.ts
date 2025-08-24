import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';

@Controller('notificaciones')  
export class NotificacionesController {
  constructor(private readonly notificacionesService: NotificacionesService) {}
  // Crear una nueva notificacion
  @Post()
  create(@Body() body: CreateNotificacioneDto) {
    return this.notificacionesService.create(body);
  }

  // Obtener todas las notificaciones
  @Get()
  findAll() {
    return this.notificacionesService.findAll();
  }
  // Consultar una notificacion por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificacionesService.findOne(+id); // Convierte a número
  }

  // Actualizar una notificacion por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateNotificacioneDto: UpdateNotificacioneDto) {
    return this.notificacionesService.update(+id, UpdateNotificacioneDto);
  }

  // Eliminar una notificacion por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.notificacionesService.remove(+id),
    };
  }
}
