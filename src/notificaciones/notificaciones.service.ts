import { Injectable } from '@nestjs/common';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { Notificaciones } from './entities/notificacione.entity';

@Injectable()
export class NotificacionesService {
  private notificaciones: Notificaciones[] = [
    {
      id: 1,
      id_usuario: 'usuario_1',
      tipo: 'comunidad',
      mensaje: 'Nueva publicación en la comunidad "Mapas Mentales": Explora cómo mejorar la retención visual.',
      fecha_envio: new Date('2025-08-20T10:00:00'),
      categoria: 'Técnicas de estudio',
    },
    {
      id: 2,
      id_usuario: 'usuario_2',
      tipo: 'recordatorio',
      mensaje: 'No olvides tu sesión de revisión de lectura crítica programada para hoy a las 6:00 PM.',
      fecha_envio: new Date('2025-08-23T08:30:00'),
      categoria: 'Recordatorio de estudio',
    },
    {
      id: 3,
      id_usuario: 'usuario_3',
      tipo: 'evento',
      mensaje: 'Únete al evento en vivo sobre "Cómo usar la Técnica Pomodoro en exámenes".',
      fecha_envio: new Date('2025-08-18T17:45:00'),
      categoria: 'Eventos de comunidad',
    },
    {
      id: 4,
      id_usuario: 'usuario_4',
      tipo: 'logro',
      mensaje: '¡Felicidades! Completaste 5 sesiones de estudio esta semana.',
      fecha_envio: new Date('2025-08-22T21:00:00'),
      categoria: 'Motivación',
    },
    {
      id: 5,
      id_usuario: 'usuario_5',
      tipo: 'sugerencia',
      mensaje: 'Basado en tu actividad, podrías beneficiarte de la técnica de repetición espaciada.',
      fecha_envio: new Date('2025-08-21T14:20:00'),
      categoria: 'Recomendaciones personalizadas',
    },
  ];

  // Retorna todas las notificaciones
  findAll(): Notificaciones[] {
  return this.notificaciones;
}


  // Buscar notificación por ID
  findOne(id: number): Notificaciones | undefined {
    return this.notificaciones.find((notificacion) => notificacion.id === id);
  }

  // Crear una nueva notificación
  create(body): Notificaciones {
    const nuevaNotificacion: Notificaciones = {
      id: this.notificaciones.length + 1,
      ...body,
      fecha_envio: new Date(),
    };
    this.notificaciones.push(nuevaNotificacion);
    return nuevaNotificacion;
  }

  // Actualizar una notificación existente por ID
  update(id: number, updateDto: UpdateNotificacioneDto): Notificaciones {
    const index = this.notificaciones.findIndex((n) => n.id === id);
    if (index === -1) {
      throw new Error('Notificación no encontrada');
    }
    const notificacionActualizada = {
      ...this.notificaciones[index],
      ...updateDto,
    };
    this.notificaciones[index] = notificacionActualizada;
    return notificacionActualizada;
  }

  // Eliminar una notificación por ID
  remove(id: number): string {
    this.notificaciones = this.notificaciones.filter((n) => n.id !== id);
    return 'Notificación eliminada';
  }
}
