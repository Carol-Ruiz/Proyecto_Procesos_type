import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlgoritmoIaService } from './algoritmo_ia.service';
import { CreateAlgoritmoIaDto } from './dto/create-algoritmo_ia.dto';
import { UpdateAlgoritmoIaDto } from './dto/update-algoritmo_ia.dto';

@Controller('algoritmo-ia')  // Ruta base 'algoritmo-ia'
export class AlgoritmoIaController {
  constructor(private readonly algoritmoIaService: AlgoritmoIaService) {}
  // Crear un algoritmo
  @Post()
  create(@Body() body: CreateAlgoritmoIaDto) {
    return this.algoritmoIaService.create(body);
  }

  // Obtener todos los algoritmos
  @Get()
  findAll() {
    return this.algoritmoIaService.findAll();
  }

  // Consultar un algoritmo por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.algoritmoIaService.findOne(+id);  // Convierte a número
  }

  // Actualizar algoritmo por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateAlgoritmoIaDto: UpdateAlgoritmoIaDto) {
    return this.algoritmoIaService.update(+id, UpdateAlgoritmoIaDto);
  }

  // Eliminar algoritmo por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.algoritmoIaService.remove(+id),
    };
  }
}