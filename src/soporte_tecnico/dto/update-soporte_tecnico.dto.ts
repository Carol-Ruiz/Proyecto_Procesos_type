import { PartialType } from '@nestjs/mapped-types';
import { CreateSoporteTecnicoDto } from './create-soporte_tecnico.dto';

export class UpdateSoporteTecnicoDto extends PartialType(CreateSoporteTecnicoDto) {
  id: number;
}
