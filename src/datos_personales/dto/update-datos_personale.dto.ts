import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosPersonaleDto } from './create-datos_personale.dto';

export class UpdateDatosPersonaleDto extends PartialType(CreateDatosPersonaleDto) {
  id: number;
}
