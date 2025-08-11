import { Injectable } from '@nestjs/common';
import { CreateSoporteTecnicoDto } from './dto/create-soporte_tecnico.dto';
import { UpdateSoporteTecnicoDto } from './dto/update-soporte_tecnico.dto';

@Injectable()
export class SoporteTecnicoService {
  create(createSoporteTecnicoDto: CreateSoporteTecnicoDto) {
    return 'This action adds a new soporteTecnico';
  }

  findAll() {
    return `This action returns all soporteTecnico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soporteTecnico`;
  }

  update(id: number, updateSoporteTecnicoDto: UpdateSoporteTecnicoDto) {
    return `This action updates a #${id} soporteTecnico`;
  }

  remove(id: number) {
    return `This action removes a #${id} soporteTecnico`;
  }
}
