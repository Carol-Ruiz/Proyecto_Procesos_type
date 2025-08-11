import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoTecnicaService } from './tipo_tecnica.service';
import { CreateTipoTecnicaDto } from './dto/create-tipo_tecnica.dto';
import { UpdateTipoTecnicaDto } from './dto/update-tipo_tecnica.dto';

@Controller('tipo-tecnica') 
export class TipoTecnicaController {
  constructor(private readonly tipoTecnicaService: TipoTecnicaService) {}

  @Post()
  create(@Body() createTipoTecnicaDto: CreateTipoTecnicaDto) {
    return "Aquí se creará un nuevo tipo de técnica";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todos los tipos de técnica";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar el tipo de técnica con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar el tipo de técnica con ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar el tipo de técnica con ID: ${id}`;
  }
}
