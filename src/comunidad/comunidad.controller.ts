import { Controller,Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { ComunidadService } from './comunidad.service';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
@Controller('comunidad')
export class ComunidadController {
  constructor(private readonly comunidadService: ComunidadService) {}

  @Post()
  create() {
    return "Aqui se creara una nueva comunidad";
  }

  @Get()
  findAll() {
    return "Aqui se van a consultar todas las comunidades";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aqui se va a consultar la comunidad con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aqui se va a actualizar la comunidad con ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aqui se va a eliminar la comunidad con ID: ${id}`;
  }
}
