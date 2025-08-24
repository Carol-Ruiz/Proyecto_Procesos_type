import { Injectable } from '@nestjs/common';
import { CreateProgresoDto } from './dto/create-progreso.dto';
import { UpdateProgresoDto } from './dto/update-progreso.dto';
import { Progreso } from './entities/progreso.entity';

@Injectable()
export class ProgresoService {
  private progreso: Progreso[] = [
    {
      id: 1,
      id_usuario: 'usuario_1',
      id_tipo_tecnica: 'técnica_Pomodoro',
      metrica: 'sesiones_completadas',
      valor_actual: '8',
      valor_anterior: '6',
      tendencia: 'mejorando',
      fecha: new Date('2025-08-20T10:30:00'),
      periodo: 'semana',
      contexto: 'Sesiones de estudio usando la técnica Pomodoro para mejorar la concentración.',
    },
    {
      id: 2,
      id_usuario: 'usuario_2',
      id_tipo_tecnica: 'repetición_espaciada',
      metrica: 'lecciones_completadas',
      valor_actual: '15',
      valor_anterior: '12',
      tendencia: 'mejorando',
      fecha: new Date('2025-08-22T08:00:00'),
      periodo: 'mes',
      contexto: 'Lecciones de vocabulario completadas usando repetición espaciada.',
    },
    {
      id: 3,
      id_usuario: 'usuario_3',
      id_tipo_tecnica: 'resumen_visual',
      metrica: 'resúmenes_creados',
      valor_actual: '4',
      valor_anterior: '3',
      tendencia: 'mejorando',
      fecha: new Date('2025-08-21T15:30:00'),
      periodo: 'semana',
      contexto: 'Creación de mapas mentales y resúmenes visuales sobre temas de historia.',
    },
    {
      id: 4,
      id_usuario: 'usuario_4',
      id_tipo_tecnica: 'lectura_crítica',
      metrica: 'páginas_leídas',
      valor_actual: '50',
      valor_anterior: '45',
      tendencia: 'estable',
      fecha: new Date('2025-08-23T14:00:00'),
      periodo: 'semana',
      contexto: 'Lectura crítica de textos académicos para análisis literario.',
    },
    {
      id: 5,
      id_usuario: 'usuario_5',
      id_tipo_tecnica: 'autoexamen',
      metrica: 'exámenes_realizados',
      valor_actual: '3',
      valor_anterior: '2',
      tendencia: 'mejorando',
      fecha: new Date('2025-08-19T18:00:00'),
      periodo: 'mes',
      contexto: 'Autoevaluaciones para repasar el contenido de ciencias.',
    },
  ];

  // Retorna todos los progresos
  findAll(): Progreso[] {
    return this.progreso;
  }

  // Buscar progreso por ID
  findOne(id: number): Progreso | undefined {
    return this.progreso.find((progreso) => progreso.id === id);
  }

  // Crear un nuevo progreso
  create(body): Progreso {
    const nuevoProgreso: Progreso = {
      id: this.progreso.length + 1,
      ...body,
      fecha: new Date(), // Fecha se asigna al momento de crear
    };
    this.progreso.push(nuevoProgreso);
    return nuevoProgreso;
  }

  // Actualizar un progreso existente por ID
  update(id: number, updateDto: UpdateProgresoDto): Progreso {
    const index = this.progreso.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Progreso no encontrado');
    }
    const progresoActualizado = {
      ...this.progreso[index],
      ...updateDto,
    };
    this.progreso[index] = progresoActualizado;
    return progresoActualizado;
  }

  // Eliminar un progreso por ID
  remove(id: number): string {
    this.progreso = this.progreso.filter((p) => p.id !== id);
    return 'Progreso eliminado';
  }
}
