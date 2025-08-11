import { Injectable } from '@nestjs/common';
import { CreateParticipacionDto } from './dto/create-participacion.dto';
import { UpdateParticipacionDto } from './dto/update-participacion.dto';

@Injectable()
export class ParticipacionService {
  create(createParticipacionDto: CreateParticipacionDto) {
    return 'This action adds a new participacion';
  }

  findAll() {
    return `This action returns all participacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} participacion`;
  }

  update(id: number, updateParticipacionDto: UpdateParticipacionDto) {
    return `This action updates a #${id} participacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} participacion`;
  }
}
