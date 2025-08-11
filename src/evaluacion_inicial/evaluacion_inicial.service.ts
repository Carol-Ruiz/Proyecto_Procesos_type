import { Injectable } from '@nestjs/common';
import { CreateEvaluacionInicialDto } from './dto/create-evaluacion_inicial.dto';
import { UpdateEvaluacionInicialDto } from './dto/update-evaluacion_inicial.dto';

@Injectable()
export class EvaluacionInicialService {
  create(createEvaluacionInicialDto: CreateEvaluacionInicialDto) {
    return 'This action adds a new evaluacionInicial';
  }

  findAll() {
    return `This action returns all evaluacionInicial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluacionInicial`;
  }

  update(id: number, updateEvaluacionInicialDto: UpdateEvaluacionInicialDto) {
    return `This action updates a #${id} evaluacionInicial`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluacionInicial`;
  }
}
