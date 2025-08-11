import { PartialType } from '@nestjs/mapped-types';
import { CreateAlgoritmoIaDto } from './create-algoritmo_ia.dto';

export class UpdateAlgoritmoIaDto extends PartialType(CreateAlgoritmoIaDto) {
  id: number;
}
