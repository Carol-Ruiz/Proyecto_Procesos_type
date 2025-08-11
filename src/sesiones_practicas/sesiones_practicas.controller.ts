import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SesionesPracticasService } from './sesiones_practicas.service';
import { CreateSesionesPracticaDto } from './dto/create-sesiones_practica.dto';
import { UpdateSesionesPracticaDto } from './dto/update-sesiones_practica.dto';

@Controller('sesiones-practicas')  
export class SesionesPracticasController {
  constructor(private readonly sesionesPracticasService: SesionesPracticasService) {}

  @Post()
  create(@Body() createSesionesPracticaDto: CreateSesionesPracticaDto) {
    return "Aquí se creará una nueva sesión práctica";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todas las sesiones prácticas";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar la sesión práctica con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar la sesión práctica con ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar la sesión práctica con ID: ${id}`;
  }
}
