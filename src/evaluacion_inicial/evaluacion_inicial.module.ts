import { Module } from '@nestjs/common';
import { EvaluacionInicialService } from './evaluacion_inicial.service';
import { EvaluacionInicialController } from './evaluacion_inicial.controller';

@Module({
  controllers: [EvaluacionInicialController],
  providers: [EvaluacionInicialService],
})
export class EvaluacionInicialModule {}
