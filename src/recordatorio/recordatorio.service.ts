import { Injectable } from '@nestjs/common';
import { CreateRecordatorioDto } from './dto/create-recordatorio.dto';
import { UpdateRecordatorioDto } from './dto/update-recordatorio.dto';
import { Recordatorio } from './entities/recordatorio.entity';

@Injectable()
export class RecordatorioService {
  private recordatorio: Recordatorio[] = [
    {
      id: 1,
      id_usuario: 'usuario_1',
      tipo: 'sesión_estudio',
      mensaje: 'Recuerda tu sesión de estudio de matemáticas programada para las 3:00 PM hoy.',
      fecha: new Date('2025-08-20T14:00:00'),
      activo: 'sí',
    },
    {
      id: 2,
      id_usuario: 'usuario_2',
      tipo: 'evaluación',
      mensaje: 'No olvides completar el examen de lectura crítica antes de las 6:00 PM.',
      fecha: new Date('2025-08-22T11:00:00'),
      activo: 'sí',
    },
    {
      id: 3,
      id_usuario: 'usuario_3',
      tipo: 'evento',
      mensaje: 'Recuerda asistir al evento en vivo sobre estrategias de aprendizaje el 23 de agosto a las 5:00 PM.',
      fecha: new Date('2025-08-23T16:00:00'),
      activo: 'sí',
    },
    {
      id: 4,
      id_usuario: 'usuario_4',
      tipo: 'sesión_estudio',
      mensaje: 'No olvides tu sesión de repaso de biología a las 8:00 PM.',
      fecha: new Date('2025-08-21T19:00:00'),
      activo: 'no',
    },
    {
      id: 5,
      id_usuario: 'usuario_5',
      tipo: 'recordatorio_personalizado',
      mensaje: 'Recuerda que necesitas repasar las técnicas de repetición espaciada para mejorar tu memoria.',
      fecha: new Date('2025-08-19T17:00:00'),
      activo: 'sí',
    },
  ];

  // Retorna todos los recordatorios
  findAll(): Recordatorio[] {
    return this.recordatorio;
  }

  // Buscar recordatorio por ID
  findOne(id: number): Recordatorio | undefined {
    return this.recordatorio.find((recordatorio) => recordatorio.id === id);
  }

  // Crear un nuevo recordatorio
  create(body): Recordatorio {
    const nuevoRecordatorio: Recordatorio = {
      id: this.recordatorio.length + 1,
      ...body,
      fecha: new Date(), // Fecha se asigna al momento de crear
    };
    this.recordatorio.push(nuevoRecordatorio);
    return nuevoRecordatorio;
  }

  // Actualizar un recordatorio existente por ID
  update(id: number, updateDto: UpdateRecordatorioDto): Recordatorio {
    const index = this.recordatorio.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new Error('Recordatorio no encontrado');
    }
    const recordatorioActualizado = {
      ...this.recordatorio[index],
      ...updateDto,
    };
    this.recordatorio[index] = recordatorioActualizado;
    return recordatorioActualizado;
  }

  // Eliminar un recordatorio por ID
  remove(id: number): string {
    this.recordatorio = this.recordatorio.filter((r) => r.id !== id);
    return 'Recordatorio eliminado';
  }
}
