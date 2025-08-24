import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetricasSesionService } from './metricas_sesion.service';
import { CreateMetricasSesionDto } from './dto/create-metricas_sesion.dto';
import { UpdateMetricasSesionDto } from './dto/update-metricas_sesion.dto';

@Controller('metricas-sesion')  
export class MetricasSesionController {
  constructor(private readonly metricasSesionService: MetricasSesionService) {}


   @Post()
  create(@Body() body: CreateMetricasSesionDto) {
    return this.metricasSesionService.create(body);
  }

  // Obtener todas las evaluaciones
  @Get()
  findAll() {
    return this.metricasSesionService.findAll();
  }

  // Consultar una evaluacion por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metricasSesionService.findOne(+id); // Convierte a número
  }

  // Actualizar una evaluacion por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateMetricasSesionDto: UpdateMetricasSesionDto) {
    return this.metricasSesionService.update(+id, UpdateMetricasSesionDto);
  }

  // Eliminar uns evaluacion por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.metricasSesionService.remove(+id),
    };
  }
}
