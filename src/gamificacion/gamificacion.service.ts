import { Injectable } from '@nestjs/common';
import { CreateGamificacionDto } from './dto/create-gamificacion.dto';
import { UpdateGamificacionDto } from './dto/update-gamificacion.dto';

@Injectable()
export class GamificacionService {
  create(createGamificacionDto: CreateGamificacionDto) {
    return 'This action adds a new gamificacion';
  }

  findAll() {
    return `This action returns all gamificacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gamificacion`;
  }

  update(id: number, updateGamificacionDto: UpdateGamificacionDto) {
    return `This action updates a #${id} gamificacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} gamificacion`;
  }
}
