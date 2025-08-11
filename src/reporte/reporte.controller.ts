import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';

@Controller('reporte')  
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  @Post()
  create(@Body() createReporteDto: CreateReporteDto) {
    return "Aquí se creará un nuevo reporte";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todos los reportes";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar el reporte con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar el reporte con ID: ${id}`;
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar el reporte con ID: ${id}`;
  }
}
