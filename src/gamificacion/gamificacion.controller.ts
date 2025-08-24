import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamificacionService } from './gamificacion.service';
import { CreateGamificacionDto } from './dto/create-gamificacion.dto';
import { UpdateGamificacionDto } from './dto/update-gamificacion.dto';

@Controller('gamificacion') 
export class GamificacionController {
  constructor(private readonly gamificacionService: GamificacionService) {}


   @Post()
  create(@Body() body: CreateGamificacionDto) {
    return this.gamificacionService.create(body);
  }

  // Obtener todas las evaluaciones
  @Get()
  findAll() {
    return this.gamificacionService.findAll();
  }

  // Consultar una evaluacion por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamificacionService.findOne(+id); // Convierte a número
  }

  // Actualizar una evaluacion por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateGamificacionDto: UpdateGamificacionDto) {
    return this.gamificacionService.update(+id, UpdateGamificacionDto);
  }

  // Eliminar uns evaluacion por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.gamificacionService.remove(+id),
    };
  }
}
