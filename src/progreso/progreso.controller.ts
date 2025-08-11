import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgresoService } from './progreso.service';
import { CreateProgresoDto } from './dto/create-progreso.dto';
import { UpdateProgresoDto } from './dto/update-progreso.dto';

@Controller('progreso')  
export class ProgresoController {
  constructor(private readonly progresoService: ProgresoService) {}

  @Post()
  create(@Body() createProgresoDto: CreateProgresoDto) {
    return "Aquí se creará un nuevo progreso";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todos los progresos";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar el progreso con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar el progreso con ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar el progreso con ID: ${id}`;
  }
}
