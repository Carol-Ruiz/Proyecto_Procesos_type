import { Injectable } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { Reporte } from './entities/reporte.entity';

@Injectable()
export class ReporteService {
  private reporte: Reporte[] = [
    {
      id: 1,
      id_usuario: 'usuario_1',
      tipo: 'progreso_sesiones',
      contenido: 'El usuario ha completado 8 sesiones de estudio en la última semana utilizando la técnica Pomodoro, con un aumento en la concentración y la eficiencia.',
      fecha_generacion: new Date('2025-08-20T11:30:00'),
      recomendaciones: 'Se recomienda mantener la misma cantidad de sesiones diarias, y aplicar pausas más largas cada 4 sesiones para evitar la fatiga.',
    },
    {
      id: 2,
      id_usuario: 'usuario_2',
      tipo: 'rendimiento_evaluacion',
      contenido: 'El usuario completó el examen de lectura crítica con un 75%. Se identificaron dificultades en la comprensión de textos largos.',
      fecha_generacion: new Date('2025-08-22T09:00:00'),
      recomendaciones: 'Se sugiere realizar más prácticas de lectura activa, subrayando y tomando notas mientras se lee para mejorar la comprensión de textos largos.',
    },
    {
      id: 3,
      id_usuario: 'usuario_3',
      tipo: 'avance_tareas',
      contenido: 'El usuario completó 4 resúmenes visuales de diferentes temas históricos. Sin embargo, se observó que los mapas mentales fueron poco detallados.',
      fecha_generacion: new Date('2025-08-21T16:45:00'),
      recomendaciones: 'Se recomienda invertir más tiempo en la creación de mapas mentales más completos, añadiendo más conexiones entre los conceptos clave.',
    },
    {
      id: 4,
      id_usuario: 'usuario_4',
      tipo: 'análisis_motivación',
      contenido: 'El usuario completó 5 tareas semanales, pero ha mostrado una baja motivación durante las últimas sesiones, especialmente en la lectura crítica.',
      fecha_generacion: new Date('2025-08-23T13:30:00'),
      recomendaciones: 'Se sugiere alternar la lectura crítica con actividades más dinámicas como debates o resúmenes visuales, para aumentar la motivación.',
    },
    {
      id: 5,
      id_usuario: 'usuario_5',
      tipo: 'evaluación_estrategias',
      contenido: 'El usuario ha mejorado en la realización de autoexámenes, completando 3 exámenes de repaso este mes, con un aumento del 10% en su puntuación.',
      fecha_generacion: new Date('2025-08-19T18:30:00'),
      recomendaciones: 'Se recomienda seguir utilizando los autoexámenes de forma regular y analizar los errores para reforzar las áreas débiles.',
    },
  ];

  // Retorna todos los reportes
  findAll(): Reporte[] {
    return this.reporte;
  }

  // Buscar reporte por ID
  findOne(id: number): Reporte | undefined {
    return this.reporte.find((reporte) => reporte.id === id);
  }

  // Crear un nuevo reporte
  create(body): Reporte {
    const nuevoReporte: Reporte = {
      id: this.reporte.length + 1,
      ...body,
      fecha_generacion: new Date(), // Fecha de generación se asigna al momento de crear
    };
    this.reporte.push(nuevoReporte);
    return nuevoReporte;
  }

  // Actualizar un reporte existente por ID
  update(id: number, updateDto: UpdateReporteDto): Reporte {
    const index = this.reporte.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new Error('Reporte no encontrado');
    }
    const reporteActualizado = {
      ...this.reporte[index],
      ...updateDto,
    };
    this.reporte[index] = reporteActualizado;
    return reporteActualizado;
  }

  // Eliminar un reporte por ID
  remove(id: number): string {
    this.reporte = this.reporte.filter((r) => r.id !== id);
    return 'Reporte eliminado';
  }
}
