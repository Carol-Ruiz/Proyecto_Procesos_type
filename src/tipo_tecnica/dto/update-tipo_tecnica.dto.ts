import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoTecnicaDto } from './create-tipo_tecnica.dto';

export class UpdateTipoTecnicaDto extends PartialType(CreateTipoTecnicaDto) {
  id: number;
}
