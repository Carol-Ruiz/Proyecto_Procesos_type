import { PartialType } from '@nestjs/mapped-types';
import { CreateContenidoColaborativoDto } from './create-contenido_colaborativo.dto';

export class UpdateContenidoColaborativoDto extends PartialType(CreateContenidoColaborativoDto) {
  id: number;
}
