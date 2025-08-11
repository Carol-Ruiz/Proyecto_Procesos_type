import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluacionInicialService } from './evaluacion_inicial.service';
import { CreateEvaluacionInicialDto } from './dto/create-evaluacion_inicial.dto';
import { UpdateEvaluacionInicialDto } from './dto/update-evaluacion_inicial.dto';

@Controller('evaluacion-inicial')  
export class EvaluacionInicialController {
  constructor(private readonly evaluacionInicialService: EvaluacionInicialService) {}

  @Post()
  create(@Body() createEvaluacionInicialDto: CreateEvaluacionInicialDto) {
    return "Aquí se creará una nueva evaluación inicial";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todas las evaluaciones iniciales";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar la evaluación inicial con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar la evaluación inicial con ID: ${id}`;
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar la evaluación inicial con ID: ${id}`;
  }
}
