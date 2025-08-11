import { PartialType } from '@nestjs/mapped-types';
import { CreateMetricasSesionDto } from './create-metricas_sesion.dto';

export class UpdateMetricasSesionDto extends PartialType(CreateMetricasSesionDto) {
  id: number;
}
