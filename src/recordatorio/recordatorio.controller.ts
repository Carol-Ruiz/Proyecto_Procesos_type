import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordatorioService } from './recordatorio.service';
import { CreateRecordatorioDto } from './dto/create-recordatorio.dto';
import { UpdateRecordatorioDto } from './dto/update-recordatorio.dto';

@Controller('recordatorio')  
export class RecordatorioController {
  constructor(private readonly recordatorioService: RecordatorioService) {}
  // Crear un recordatorio
  @Post()
  create(@Body() body: CreateRecordatorioDto) {
    return this.recordatorioService.create(body);
  }

  // Obtener todos los recordatorios
  @Get()
  findAll() {
    return this.recordatorioService.findAll();
  }
  // Consultar un recordatorio por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordatorioService.findOne(+id); // Convierte a número
  }

  // Actualizar un recordatorio por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateRecordatorioDto: UpdateRecordatorioDto) {
    return this.recordatorioService.update(+id, UpdateRecordatorioDto);
  }

  // Eliminar un recordatorio por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.recordatorioService.remove(+id),
    };
  }
}
