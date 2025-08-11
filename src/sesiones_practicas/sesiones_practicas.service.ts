import { Injectable } from '@nestjs/common';
import { CreateSesionesPracticaDto } from './dto/create-sesiones_practica.dto';
import { UpdateSesionesPracticaDto } from './dto/update-sesiones_practica.dto';

@Injectable()
export class SesionesPracticasService {
  create(createSesionesPracticaDto: CreateSesionesPracticaDto) {
    return 'This action adds a new sesionesPractica';
  }

  findAll() {
    return `This action returns all sesionesPracticas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sesionesPractica`;
  }

  update(id: number, updateSesionesPracticaDto: UpdateSesionesPracticaDto) {
    return `This action updates a #${id} sesionesPractica`;
  }

  remove(id: number) {
    return `This action removes a #${id} sesionesPractica`;
  }
}
