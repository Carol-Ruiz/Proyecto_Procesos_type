import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipacionService } from './participacion.service';
import { CreateParticipacionDto } from './dto/create-participacion.dto';
import { UpdateParticipacionDto } from './dto/update-participacion.dto';

@Controller('participacion')  
export class ParticipacionController {
  constructor(private readonly participacionService: ParticipacionService) {}

  // Crear una nueva participacion
  @Post()
  create(@Body() body: CreateParticipacionDto) {
    return this.participacionService.create(body);
  }

  // Obtener todas las participacion
  @Get()
  findAll() {
    return this.participacionService.findAll();
  }
  // Consultar una participacion por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participacionService.findOne(+id); // Convierte a número
  }

  // Actualizar una participacion por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateParticipacionDto: UpdateParticipacionDto) {
    return this.participacionService.update(+id, UpdateParticipacionDto);
  }

  // Eliminar una participacion por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.participacionService.remove(+id),
    };
  }
}
