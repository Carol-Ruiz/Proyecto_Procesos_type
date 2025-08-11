import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetricasSesionService } from './metricas_sesion.service';
import { CreateMetricasSesionDto } from './dto/create-metricas_sesion.dto';
import { UpdateMetricasSesionDto } from './dto/update-metricas_sesion.dto';

@Controller('metricas-sesion')  
export class MetricasSesionController {
  constructor(private readonly metricasSesionService: MetricasSesionService) {}

  @Post()
  create(@Body() createMetricasSesionDto: CreateMetricasSesionDto) {
    return "Aquí se creará una nueva métrica de sesión";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todas las métricas de sesión";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar la métrica de sesión con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar la métrica de sesión con ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar la métrica de sesión con ID: ${id}`;
  }
}
