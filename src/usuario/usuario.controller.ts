import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')  
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // Crear un usuario
   @Post()
   create(@Body() body: CreateUsuarioDto) {
     return this.usuarioService.create(body);
   }
 
   // Obtener todos los usuarios
   @Get()
   findAll() {
     return this.usuarioService.findAll();
   }
   // Consultar un usuario por ID
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.usuarioService.findOne(+id); // Convierte a número
   }
 
   // Actualizar un usuario por ID
   @Patch(':id')
   update(@Param('id') id: string, @Body()  UpdateUsuarioDto: UpdateUsuarioDto) {
     return this.usuarioService.update(+id, UpdateUsuarioDto);
   }
 
   // Eliminar un usuario por ID
   @Delete(':id')
   remove(@Param('id') id: string) {
     return {
       Success: true,
       mensaje: this.usuarioService.remove(+id),
     };
   }
}
