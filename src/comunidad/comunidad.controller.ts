import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComunidadService } from './comunidad.service';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';

@Controller('comunidad')
export class ComunidadController {
  // Inyección de dependencias
  constructor(private readonly comunidadService: ComunidadService) {}

  // Crear una nueva comunidad
  @Post()
  create(@Body() body: CreateComunidadDto) {
    return this.comunidadService.create(body);
  }

  // Obtener todas las comunidades
  @Get()
  findAll() {
    return this.comunidadService.findAll();
  }

  // Consultar una comunidad por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comunidadService.findOne(+id);  // Convierte a número
  }

  // Actualizar comunidad por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComunidadDto: UpdateComunidadDto) {
    return this.comunidadService.update(+id, updateComunidadDto);
  }

  // Eliminar comunidad por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.comunidadService.remove(+id),
    };
  }
}
