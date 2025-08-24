import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoTecnicaService } from './tipo_tecnica.service';
import { CreateTipoTecnicaDto } from './dto/create-tipo_tecnica.dto';
import { UpdateTipoTecnicaDto } from './dto/update-tipo_tecnica.dto';

@Controller('tipo-tecnica') 
export class TipoTecnicaController {
  constructor(private readonly tipoTecnicaService: TipoTecnicaService) {}

 // Crear una  tecnica 
  @Post()
  create(@Body() body: CreateTipoTecnicaDto) {
    return this.tipoTecnicaService.create(body);
  }

  // Obtener todos las tecnicas
  @Get()
  findAll() {
    return this.tipoTecnicaService.findAll();
  }
  // Consultar una tecnica por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoTecnicaService.findOne(+id); // Convierte a número
  }

  // Actualizar una tecnica por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body()  UpdateTipoTecnicaDto: UpdateTipoTecnicaDto) {
    return this.tipoTecnicaService.update(+id, UpdateTipoTecnicaDto);
  }

  // Eliminar una tecnica por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      Success: true,
      mensaje: this.tipoTecnicaService.remove(+id),
    };
  }
}
