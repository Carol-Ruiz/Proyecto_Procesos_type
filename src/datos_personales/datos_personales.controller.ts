import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosPersonalesService } from './datos_personales.service';
import { CreateDatosPersonaleDto } from './dto/create-datos_personale.dto';
import { UpdateDatosPersonaleDto } from './dto/update-datos_personale.dto';

@Controller('datos-personales')  
export class DatosPersonalesController {
  constructor(private readonly datosPersonalesService: DatosPersonalesService) {}

   @Post()
  create(@Body() body: CreateDatosPersonaleDto) {
    return this.datosPersonalesService.create(body);
  }

  // Obtener todos los  datos personales
  @Get()
  findAll() {
    return this.datosPersonalesService.findAll();
  }

  // Consultar un  dato personal por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosPersonalesService.findOne(+id); // Convierte a número
  }

  // Actualizar un  dato personale por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateDatosPersonaleDto: UpdateDatosPersonaleDto) {
    return this.datosPersonalesService.update(+id, UpdateDatosPersonaleDto);
  }

  // Eliminar un  dato personale por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.datosPersonalesService.remove(+id),
    };
  }
}
