import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosPersonalesService } from './datos_personales.service';
import { CreateDatosPersonaleDto } from './dto/create-datos_personale.dto';
import { UpdateDatosPersonaleDto } from './dto/update-datos_personale.dto';

@Controller('datos-personales')  
export class DatosPersonalesController {
  constructor(private readonly datosPersonalesService: DatosPersonalesService) {}

  @Post()
  create(@Body() createDatosPersonaleDto: CreateDatosPersonaleDto) {
    return "Aquí se creará un nuevo dato personal";
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todos los datos personales";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se va a consultar el dato personal con ID: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosPersonaleDto: UpdateDatosPersonaleDto) {
    return `Aquí se va a actualizar el dato personal con ID: ${id}`;
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aquí se va a eliminar el dato personal con ID: ${id}`;
  }
}
