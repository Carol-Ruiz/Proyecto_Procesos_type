import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoporteTecnicoService } from './soporte_tecnico.service';
import { CreateSoporteTecnicoDto } from './dto/create-soporte_tecnico.dto';
import { UpdateSoporteTecnicoDto } from './dto/update-soporte_tecnico.dto';

@Controller('soporte-tecnico')  
export class SoporteTecnicoController {
  constructor(private readonly soporteTecnicoService: SoporteTecnicoService) {}
 // Crear un soporte tecnico 
  @Post()
  create(@Body() body: CreateSoporteTecnicoDto) {
    return this.soporteTecnicoService.create(body);
  }

  // Obtener todos los soportes tecnicos
  @Get()
  findAll() {
    return this.soporteTecnicoService.findAll();
  }
  // Consultar un soporte tecnico  por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soporteTecnicoService.findOne(+id); // Convierte a número
  }

  // Actualizar un soporte tecnico por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body()  UpdateSoporteTecnicoDto: UpdateSoporteTecnicoDto) {
    return this.soporteTecnicoService.update(+id, UpdateSoporteTecnicoDto);
  }

  // Eliminar un soporte tecnico por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.soporteTecnicoService.remove(+id),
    };
  }
}
