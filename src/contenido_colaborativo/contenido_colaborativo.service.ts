import { Injectable } from '@nestjs/common';
import { CreateContenidoColaborativoDto } from './dto/create-contenido_colaborativo.dto';
import { UpdateContenidoColaborativoDto } from './dto/update-contenido_colaborativo.dto';

@Injectable()
export class ContenidoColaborativoService {
  create(createContenidoColaborativoDto: CreateContenidoColaborativoDto) {
    return 'This action adds a new contenidoColaborativo';
  }

  findAll() {
    return `This action returns all contenidoColaborativo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contenidoColaborativo`;
  }

  update(id: number, updateContenidoColaborativoDto: UpdateContenidoColaborativoDto) {
    return `This action updates a #${id} contenidoColaborativo`;
  }

  remove(id: number) {
    return `This action removes a #${id} contenidoColaborativo`;
  }
}
