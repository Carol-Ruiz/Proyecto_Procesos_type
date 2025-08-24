import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SesionesPracticasService } from './sesiones_practicas.service';
import { CreateSesionesPracticaDto } from './dto/create-sesiones_practica.dto';
import { UpdateSesionesPracticaDto } from './dto/update-sesiones_practica.dto';

@Controller('sesiones-practicas')  
export class SesionesPracticasController {
  constructor(private readonly sesionesPracticasService: SesionesPracticasService) {}
 // Crear una sesion practica 
  @Post()
  create(@Body() body: CreateSesionesPracticaDto) {
    return this.sesionesPracticasService.create(body);
  }

  // Obtener todas las sesiones practicas
  @Get()
  findAll() {
    return this.sesionesPracticasService.findAll();
  }
  // Consultar una sesion practica por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sesionesPracticasService.findOne(+id); // Convierte a número
  }

  // Actualizar una sesion practica por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body()  UpdateSesionesPracticaDto: UpdateSesionesPracticaDto) {
    return this.sesionesPracticasService.update(+id,  UpdateSesionesPracticaDto);
  }

  // Eliminar una sesion practica  por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.sesionesPracticasService.remove(+id),
    };
  }
}
