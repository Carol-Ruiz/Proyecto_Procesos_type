import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluacionInicialDto } from './create-evaluacion_inicial.dto';

export class UpdateEvaluacionInicialDto extends PartialType(CreateEvaluacionInicialDto) {
  id: number;
}
