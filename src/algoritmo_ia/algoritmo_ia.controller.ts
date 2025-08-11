import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlgoritmoIaService } from './algoritmo_ia.service';
import { CreateAlgoritmoIaDto } from './dto/create-algoritmo_ia.dto';
import { UpdateAlgoritmoIaDto } from './dto/update-algoritmo_ia.dto';

@Controller('algoritmo-ia')  // Ruta base 'algoritmo-ia'
export class AlgoritmoIaController {
  constructor(private readonly algoritmoIaService: AlgoritmoIaService) {}

  @Post()
  create(@Body() createAlgoritmoIaDto: CreateAlgoritmoIaDto) {
    return "Aquí se creará un nuevo algoritmo IA";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todos los algoritmos IA";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar el algoritmo IA con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlgoritmoIaDto: UpdateAlgoritmoIaDto) {
    return `Aquí se va a actualizar el algoritmo IA con ID: ${id}`;
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar el algoritmo IA con ID: ${id}`;
  }
}
