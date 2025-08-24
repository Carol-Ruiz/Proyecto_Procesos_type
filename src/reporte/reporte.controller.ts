import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';

@Controller('reporte')  
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  // Crear un reporte
  @Post()
  create(@Body() body: CreateReporteDto) {
    return this.reporteService.create(body);
  }

  // Obtener todos los reportes
  @Get()
  findAll() {
    return this.reporteService.findAll();
  }
  // Consultar un reporte por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteService.findOne(+id); // Convierte a número
  }

  // Actualizar un reporte por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateReporteDto: UpdateReporteDto) {
    return this.reporteService.update(+id, UpdateReporteDto);
  }

  // Eliminar un reporte por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.reporteService.remove(+id),
    };
  }
}
