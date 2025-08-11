import { Injectable } from '@nestjs/common';
import { CreateAlgoritmoIaDto } from './dto/create-algoritmo_ia.dto';
import { UpdateAlgoritmoIaDto } from './dto/update-algoritmo_ia.dto';

@Injectable()
export class AlgoritmoIaService {
  create(createAlgoritmoIaDto: CreateAlgoritmoIaDto) {
    return 'This action adds a new algoritmoIa';
  }

  findAll() {
    return `This action returns all algoritmoIa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} algoritmoIa`;
  }

  update(id: number, updateAlgoritmoIaDto: UpdateAlgoritmoIaDto) {
    return `This action updates a #${id} algoritmoIa`;
  }

  remove(id: number) {
    return `This action removes a #${id} algoritmoIa`;
  }
}
