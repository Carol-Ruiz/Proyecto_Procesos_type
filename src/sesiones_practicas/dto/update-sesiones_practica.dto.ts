import { PartialType } from '@nestjs/mapped-types';
import { CreateSesionesPracticaDto } from './create-sesiones_practica.dto';

export class UpdateSesionesPracticaDto extends PartialType(CreateSesionesPracticaDto) {
  id: number;
}
