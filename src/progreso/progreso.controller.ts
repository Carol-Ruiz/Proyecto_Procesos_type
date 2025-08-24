import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgresoService } from './progreso.service';
import { CreateProgresoDto } from './dto/create-progreso.dto';
import { UpdateProgresoDto } from './dto/update-progreso.dto';
import { UpdateParticipacionDto } from 'src/participacion/dto/update-participacion.dto';

@Controller('progreso')  
export class ProgresoController {
  constructor(private readonly progresoService: ProgresoService) {}

  // Crear un nuevo progreso
  @Post()
  create(@Body() body: CreateProgresoDto) {
    return this.progresoService.create(body);
  }

  // Obtener todos los progresos
  @Get()
  findAll() {
    return this.progresoService.findAll();
  }
  // Consultar un nuevo progreso por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progresoService.findOne(+id); // Convierte a número
  }

  // Actualizar un nuevo progreso por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateProgresoDto: UpdateProgresoDto) {
    return this.progresoService.update(+id, UpdateProgresoDto);
  }

  // Eliminar un nuevo progreso por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.progresoService.remove(+id),
    };
  }
}
