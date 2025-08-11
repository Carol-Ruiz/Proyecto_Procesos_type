import { PartialType } from '@nestjs/mapped-types';
import { CreateGamificacionDto } from './create-gamificacion.dto';

export class UpdateGamificacionDto extends PartialType(CreateGamificacionDto) {
  id: number;
}
