import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoporteTecnicoService } from './soporte_tecnico.service';
import { CreateSoporteTecnicoDto } from './dto/create-soporte_tecnico.dto';
import { UpdateSoporteTecnicoDto } from './dto/update-soporte_tecnico.dto';

@Controller('soporte-tecnico')  
export class SoporteTecnicoController {
  constructor(private readonly soporteTecnicoService: SoporteTecnicoService) {}

  @Post()
  create(@Body() createSoporteTecnicoDto: CreateSoporteTecnicoDto) {
    return "Aquí se creará un nuevo soporte técnico";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todos los soportes técnicos";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar el soporte técnico con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar el soporte técnico con ID: ${id}`;
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar el soporte técnico con ID: ${id}`;
  }
}
