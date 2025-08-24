import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluacionInicialService } from './evaluacion_inicial.service';
import { CreateEvaluacionInicialDto } from './dto/create-evaluacion_inicial.dto';
import { UpdateEvaluacionInicialDto } from './dto/update-evaluacion_inicial.dto';

@Controller('evaluacion-inicial')  
export class EvaluacionInicialController {
  constructor(private readonly evaluacionInicialService: EvaluacionInicialService) {}

 
   @Post()
  create(@Body() body: CreateEvaluacionInicialDto) {
    return this.evaluacionInicialService.create(body);
  }

  // Obtener todas las evaluaciones
  @Get()
  findAll() {
    return this.evaluacionInicialService.findAll();
  }

  // Consultar una evaluacion por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluacionInicialService.findOne(+id); // Convierte a número
  }

  // Actualizar una evaluacion por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateEvaluacionInicialDto: UpdateEvaluacionInicialDto) {
    return this.evaluacionInicialService.update(+id, UpdateEvaluacionInicialDto);
  }

  // Eliminar uns evaluacion por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.evaluacionInicialService.remove(+id),
    };
  }
}
