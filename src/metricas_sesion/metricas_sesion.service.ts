import { Injectable } from '@nestjs/common';
import { CreateMetricasSesionDto } from './dto/create-metricas_sesion.dto';
import { UpdateMetricasSesionDto } from './dto/update-metricas_sesion.dto';
import { MetricasSesion } from './entities/metricas_sesion.entity';

@Injectable()
export class MetricasSesionService {
  private metricasSesion: MetricasSesion[] = [
    {
      id: 1,
      tiempo: '2 horas',
      valor: new Date('2023-03-10T14:30:00'), // Fecha con hora, representa el progreso de la sesión
      contexto: 'Estudio de técnicas de memoria',
    },
    {
      id: 2,
      tiempo: '1.5 horas',
      valor: new Date('2023-04-15T16:00:00'),
      contexto: 'Revisión de conceptos de matemáticas',
    },
    {
      id: 3,
      tiempo: '1 hora',
      valor: new Date('2023-05-20T10:15:00'),
      contexto: 'Estudio de lectura crítica',
    },
    {
      id: 4,
      tiempo: '3 horas',
      valor: new Date('2023-06-05T18:00:00'),
      contexto: 'Revisión general antes de la evaluación',
    },
    {
      id: 5,
      tiempo: '45 minutos',
      valor: new Date('2023-07-01T12:30:00'),
      contexto: 'Práctica de ejercicios de álgebra',
    },
  ];

  // Retorna todas las métricas de sesión
  findAll(): MetricasSesion[] {
    return this.metricasSesion;
  }

  // Buscar métrica por ID
  findOne(id: number): MetricasSesion | undefined {
    return this.metricasSesion.find((metricas) => metricas.id === id);
  }

  // Crear una nueva métrica de sesión
  create(body): MetricasSesion {
    const newMetricasSesion: MetricasSesion = {
      id: this.metricasSesion.length + 1,
      ...body,
      valor: new Date(), // Se asigna la fecha de creación automáticamente
    };
    this.metricasSesion.push(newMetricasSesion);
    return newMetricasSesion;
  }

  // Actualizar una métrica de sesión por ID
  update(id: number, updateMetricasSesionDto: UpdateMetricasSesionDto): MetricasSesion {
    const metricasIndex = this.metricasSesion.findIndex((metricas) => metricas.id === id);
    if (metricasIndex === -1) {
      throw new Error('Métrica no encontrada');
    }
    const updatedMetricasSesion = { 
      ...this.metricasSesion[metricasIndex], 
      ...updateMetricasSesionDto 
    };
    this.metricasSesion[metricasIndex] = updatedMetricasSesion;
    return updatedMetricasSesion;
  }

  // Eliminar una métrica de sesión por ID
  remove(id: number): string {
    this.metricasSesion = this.metricasSesion.filter((metricas) => metricas.id !== id);
    return 'Métrica de sesión eliminada';
  }
}
