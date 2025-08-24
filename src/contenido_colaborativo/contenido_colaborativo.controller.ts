import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoColaborativoService } from './contenido_colaborativo.service';
import { CreateContenidoColaborativoDto } from './dto/create-contenido_colaborativo.dto';
import { UpdateContenidoColaborativoDto } from './dto/update-contenido_colaborativo.dto';

@Controller('contenido-colaborativo')
export class ContenidoColaborativoController {
  constructor(private readonly contenidoColaborativoService: ContenidoColaborativoService) {}

  // Crear un nuevo contenido colaborativo
  @Post()
  create(@Body() body: CreateContenidoColaborativoDto) {
    return this.contenidoColaborativoService.create(body);
  }

  // Obtener todos los contenidos colaborativos
  @Get()
  findAll() {
    return this.contenidoColaborativoService.findAll();
  }

  // Consultar un contenido colaborativo por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contenidoColaborativoService.findOne(+id); // Convierte a número
  }

  // Actualizar un contenido colaborativo por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContenidoColaborativoDto: UpdateContenidoColaborativoDto) {
    return this.contenidoColaborativoService.update(+id, updateContenidoColaborativoDto);
  }

  // Eliminar un contenido colaborativo por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.contenidoColaborativoService.remove(+id),
    };
  }
}
