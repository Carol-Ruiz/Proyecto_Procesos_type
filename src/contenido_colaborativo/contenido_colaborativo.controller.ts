import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoColaborativoService } from './contenido_colaborativo.service';
import { CreateContenidoColaborativoDto } from './dto/create-contenido_colaborativo.dto';
import { UpdateContenidoColaborativoDto } from './dto/update-contenido_colaborativo.dto';

@Controller('contenido-colaborativo')  
export class ContenidoColaborativoController {
  constructor(private readonly contenidoColaborativoService: ContenidoColaborativoService) {}

  @Post()
  create(@Body() createContenidoColaborativoDto: CreateContenidoColaborativoDto) {
    return "Aquí se creará un nuevo contenido colaborativo";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todos los contenidos colaborativos";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar el contenido colaborativo con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar el contenido colaborativo con ID: ${id}`;
  }

 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar el contenido colaborativo con ID: ${id}`;
  }
}
