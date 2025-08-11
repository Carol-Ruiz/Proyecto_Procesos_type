import { Injectable } from '@nestjs/common';
import { CreateTipoTecnicaDto } from './dto/create-tipo_tecnica.dto';
import { UpdateTipoTecnicaDto } from './dto/update-tipo_tecnica.dto';

@Injectable()
export class TipoTecnicaService {
  create(createTipoTecnicaDto: CreateTipoTecnicaDto) {
    return 'This action adds a new tipoTecnica';
  }

  findAll() {
    return `This action returns all tipoTecnica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoTecnica`;
  }

  update(id: number, updateTipoTecnicaDto: UpdateTipoTecnicaDto) {
    return `This action updates a #${id} tipoTecnica`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoTecnica`;
  }
}
