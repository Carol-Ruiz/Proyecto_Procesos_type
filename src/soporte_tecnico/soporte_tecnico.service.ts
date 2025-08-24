import { Injectable } from '@nestjs/common';
import { CreateSoporteTecnicoDto } from './dto/create-soporte_tecnico.dto';
import { UpdateSoporteTecnicoDto } from './dto/update-soporte_tecnico.dto';
import { SoporteTecnico } from './entities/soporte_tecnico.entity';

@Injectable()
export class SoporteTecnicoService {
  private soportetecnico: SoporteTecnico[] = [
    {
      id: 1,
      id_usuario: 'usuario_1',
      tipo: 'Problema con la plataforma de estudio',
      descripcion: 'La plataforma se congela cada vez que intento acceder a las lecciones de matemáticas.',
      estado: 'Resuelto',
      fecha_creacion: new Date('2025-08-20T12:00:00'),
      fecha_duracion: new Date('2025-08-20T12:45:00'),
    },
    {
      id: 2,
      id_usuario: 'usuario_2',
      tipo: 'Problema con la carga de material',
      descripcion: 'No puedo descargar el archivo del examen de química, siempre aparece un error de conexión.',
      estado: 'Pendiente',
      fecha_creacion: new Date('2025-08-21T09:30:00'),
      fecha_duracion: new Date('2025-08-21T09:30:00'), // Aún no resuelto
    },
    {
      id: 3,
      id_usuario: 'usuario_3',
      tipo: 'Acceso a la cuenta',
      descripcion: 'No puedo iniciar sesión en mi cuenta después de haber cambiado la contraseña.',
      estado: 'Resuelto',
      fecha_creacion: new Date('2025-08-22T14:00:00'),
      fecha_duracion: new Date('2025-08-22T14:20:00'),
    },
    {
      id: 4,
      id_usuario: 'usuario_4',
      tipo: 'Interrupción de la conexión',
      descripcion: 'Mi conexión a internet se cae constantemente mientras veo los videos de la lección de biología.',
      estado: 'En progreso',
      fecha_creacion: new Date('2025-08-23T16:00:00'),
      fecha_duracion: new Date('2025-08-23T16:00:00'), // Aún no resuelto
    },
    {
      id: 5,
      id_usuario: 'usuario_5',
      tipo: 'Problema con notificaciones',
      descripcion: 'No recibo notificaciones sobre las próximas sesiones de estudio, aunque las tengo activadas.',
      estado: 'Resuelto',
      fecha_creacion: new Date('2025-08-19T10:15:00'),
      fecha_duracion: new Date('2025-08-19T10:45:00'),
    },
  ];

  // Retorna todos los reportes de soporte técnico
  findAll(): SoporteTecnico[] {
    return this.soportetecnico;
  }

  // Buscar reporte de soporte técnico por ID
  findOne(id: number): SoporteTecnico | undefined {
    return this.soportetecnico.find((soporte) => soporte.id === id);
  }

  // Crear un nuevo reporte de soporte técnico
  create(body): SoporteTecnico {
    const nuevoSoporte: SoporteTecnico = {
      id: this.soportetecnico.length + 1,
      ...body,
      fecha_creacion: new Date(), // Fecha de creación se asigna al momento de crear
      fecha_duracion: new Date(),  // Fecha de duración también
    };
    this.soportetecnico.push(nuevoSoporte);
    return nuevoSoporte;
  }

  // Actualizar un reporte de soporte técnico existente por ID
  update(id: number, updateDto: UpdateSoporteTecnicoDto): SoporteTecnico {
    const index = this.soportetecnico.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error('Reporte de soporte técnico no encontrado');
    }
    const soporteActualizado = {
      ...this.soportetecnico[index],
      ...updateDto,
    };
    this.soportetecnico[index] = soporteActualizado;
    return soporteActualizado;
  }

  // Eliminar un reporte de soporte técnico por ID
  remove(id: number): string {
    this.soportetecnico = this.soportetecnico.filter((s) => s.id !== id);
    return 'Reporte de soporte técnico eliminado';
  }
}
