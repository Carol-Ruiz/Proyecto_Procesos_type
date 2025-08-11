import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordatorioService } from './recordatorio.service';
import { CreateRecordatorioDto } from './dto/create-recordatorio.dto';
import { UpdateRecordatorioDto } from './dto/update-recordatorio.dto';

@Controller('recordatorio')  
export class RecordatorioController {
  constructor(private readonly recordatorioService: RecordatorioService) {}

  
  @Post()
  create(@Body() createRecordatorioDto: CreateRecordatorioDto) {
    return "Aquí se creará un nuevo recordatorio";
  }

  
  @Get()
  findAll() {
    return "Aquí se van a consultar todos los recordatorios";
  }

 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar el recordatorio con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar el recordatorio con ID: ${id}`;
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar el recordatorio con ID: ${id}`;
  }
}
