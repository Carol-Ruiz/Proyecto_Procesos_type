import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Carlos',
      apellido: 'González',
      email: 'carlos.gonzalez@email.com',
      clave: 'claveSegura123',
      fecha_registro: new Date('2025-08-15T10:00:00'),
      nivel_experiencia: 'Intermedio',
      perfil_congnitivo: 'Visual',
      activo: 'sí',
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'Martínez',
      email: 'ana.martinez@email.com',
      clave: 'MiClave2025',
      fecha_registro: new Date('2025-08-18T14:30:00'),
      nivel_experiencia: 'Avanzado',
      perfil_congnitivo: 'Auditivo',
      activo: 'sí',
    },
    {
      id: 3,
      nombre: 'Luis',
      apellido: 'Pérez',
      email: 'luis.perez@email.com',
      clave: '1234Secure',
      fecha_registro: new Date('2025-08-20T09:15:00'),
      nivel_experiencia: 'Básico',
      perfil_congnitivo: 'Kinestésico',
      activo: 'no',
    },
    {
      id: 4,
      nombre: 'María',
      apellido: 'Rodríguez',
      email: 'maria.rodriguez@email.com',
      clave: 'ClaveMaria2025',
      fecha_registro: new Date('2025-08-22T11:00:00'),
      nivel_experiencia: 'Intermedio',
      perfil_congnitivo: 'Visual',
      activo: 'sí',
    },
    {
      id: 5,
      nombre: 'Javier',
      apellido: 'Sánchez',
      email: 'javier.sanchez@email.com',
      clave: 'JavierClave2025',
      fecha_registro: new Date('2025-08-19T16:45:00'),
      nivel_experiencia: 'Avanzado',
      perfil_congnitivo: 'Auditivo',
      activo: 'sí',
    },
  ];

  // Retorna todos los usuarios
  findAll(): Usuario[] {
    return this.usuarios;
  }

  // Buscar un usuario por ID
  findOne(id: number): Usuario | undefined {
    return this.usuarios.find((usuario) => usuario.id === id);
  }

  // Crear un nuevo usuario
  create(body): Usuario {
    const nuevoUsuario: Usuario = {
      id: this.usuarios.length + 1,
      ...body,
      fecha_registro: new Date(), // Fecha de registro al crear el usuario
    };
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  // Actualizar un usuario existente por ID
  update(id: number, updateUsuarioDto: UpdateUsuarioDto): Usuario {
    const index = this.usuarios.findIndex((usuario) => usuario.id === id);
    if (index === -1) {
      throw new Error('Usuario no encontrado');
    }
    const usuarioActualizado = {
      ...this.usuarios[index],
      ...updateUsuarioDto,
    };
    this.usuarios[index] = usuarioActualizado;
    return usuarioActualizado;
  }

  // Eliminar un usuario por ID
  remove(id: number): string {
    const index = this.usuarios.findIndex((usuario) => usuario.id === id);
    if (index === -1) {
      throw new Error('Usuario no encontrado');
    }
    this.usuarios.splice(index, 1);
    return `Usuario con id ${id} eliminado`;
  }
}
