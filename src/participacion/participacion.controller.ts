import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipacionService } from './participacion.service';
import { CreateParticipacionDto } from './dto/create-participacion.dto';
import { UpdateParticipacionDto } from './dto/update-participacion.dto';

@Controller('participacion')  
export class ParticipacionController {
  constructor(private readonly participacionService: ParticipacionService) {}

  @Post()
  create(@Body() createParticipacionDto: CreateParticipacionDto) {
    return "Aquí se creará una nueva participación";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todas las participaciones";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar la participación con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar la participación con ID: ${id}`;
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar la participación con ID: ${id}`;
  }
}
