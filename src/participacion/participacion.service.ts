import { Injectable } from '@nestjs/common';
import { CreateParticipacionDto } from './dto/create-participacion.dto';
import { UpdateParticipacionDto } from './dto/update-participacion.dto';
import { Participacion } from './entities/participacion.entity';

@Injectable()
export class ParticipacionService {
  private participacion: Participacion[] = [
    {
      id: 1,
      id_usuario: 'usuario_1',
      id_comunidad: 'tecnicas_estudio',
      rol: 'participante',
      fecha_ingreso: new Date('2025-08-20T10:30:00'),
      activo: 'sí',
    },
    {
      id: 2,
      id_usuario: 'usuario_2',
      id_comunidad: 'evaluaciones',
      rol: 'administrador',
      fecha_ingreso: new Date('2025-08-22T08:00:00'),
      activo: 'sí',
    },
    {
      id: 3,
      id_usuario: 'usuario_3',
      id_comunidad: 'tarea_grupal',
      rol: 'moderador',
      fecha_ingreso: new Date('2025-08-21T09:45:00'),
      activo: 'sí',
    },
    {
      id: 4,
      id_usuario: 'usuario_4',
      id_comunidad: 'metodo_estudio',
      rol: 'participante',
      fecha_ingreso: new Date('2025-08-23T14:15:00'),
      activo: 'no',
    },
    {
      id: 5,
      id_usuario: 'usuario_5',
      id_comunidad: 'tecnica_repeticion',
      rol: 'participante',
      fecha_ingreso: new Date('2025-08-19T18:30:00'),
      activo: 'sí',
    },
  ];

  // Retorna todas las participaciones
  findAll(): Participacion[] {
    return this.participacion;
  }

  // Buscar participación por ID
  findOne(id: number): Participacion | undefined {
    return this.participacion.find((participacion) => participacion.id === id);
  }

  // Crear una nueva participación
  create(body): Participacion {
    const nuevaParticipacion: Participacion = {
      id: this.participacion.length + 1,
      ...body,
      fecha_ingreso: new Date(), // Fecha de ingreso se asigna al momento de crear
    };
    this.participacion.push(nuevaParticipacion);
    return nuevaParticipacion;
  }

  // Actualizar una participación existente por ID
  update(id: number, updateDto: UpdateParticipacionDto): Participacion {
    const index = this.participacion.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Participación no encontrada');
    }
    const participacionActualizada = {
      ...this.participacion[index],
      ...updateDto,
    };
    this.participacion[index] = participacionActualizada;
    return participacionActualizada;
  }

  // Eliminar una participación por ID
  remove(id: number): string {
    this.participacion = this.participacion.filter((p) => p.id !== id);
    return 'Participación eliminada';
  }
}
