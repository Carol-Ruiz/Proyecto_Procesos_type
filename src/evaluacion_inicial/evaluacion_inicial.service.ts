import { Injectable } from '@nestjs/common';
import { CreateEvaluacionInicialDto } from './dto/create-evaluacion_inicial.dto';
import { UpdateEvaluacionInicialDto } from './dto/update-evaluacion_inicial.dto';
import { EvaluacionInicial } from './entities/evaluacion_inicial.entity';

@Injectable()
export class EvaluacionInicialService {
  private evaluacionesIniciales: EvaluacionInicial[] = [
    {
      id: 1,
      resultados_atencion: 'Excelente atención y enfoque en la tarea.',
      fecha_creacion: new Date('2023-02-20'),
      perfil_cognitivo: 'Aprendizaje visual y auditivo.',
      puntuacion: '9/10',
      fecha_evaluacion: new Date('2023-02-18'),
    },
    {
      id: 2,
      resultados_atencion: 'Atención moderada, mejora posible con descansos frecuentes.',
      fecha_creacion: new Date('2023-03-05'),
      perfil_cognitivo: 'Aprendizaje kinestésico, prefiere estudiar haciendo.',
      puntuacion: '7/10',
      fecha_evaluacion: new Date('2023-03-02'),
    },
    {
      id: 3,
      resultados_atencion: 'Buena capacidad para mantener atención durante largas sesiones.',
      fecha_creacion: new Date('2023-04-10'),
      perfil_cognitivo: 'Estudio independiente, utiliza mapas mentales.',
      puntuacion: '8/10',
      fecha_evaluacion: new Date('2023-04-08'),
    },
    {
      id: 4,
      resultados_atencion: 'Atención dispersa, dificultad para concentrarse por largos periodos.',
      fecha_creacion: new Date('2023-05-15'),
      perfil_cognitivo: 'Prefiere estudiar en grupo, aprendizaje colaborativo.',
      puntuacion: '6/10',
      fecha_evaluacion: new Date('2023-05-10'),
    },
    {
      id: 5,
      resultados_atencion: 'Atención sostenida durante tareas que requieren creatividad.',
      fecha_creacion: new Date('2023-06-25'),
      perfil_cognitivo: 'Inteligencia emocional, excelente manejo de gestión del tiempo.',
      puntuacion: '8.5/10',
      fecha_evaluacion: new Date('2023-06-20'),
    },
  ];

  // Retorna todas las evaluaciones
  findAll(): EvaluacionInicial[] {
    return this.evaluacionesIniciales;
  }

  // Buscar evaluación por ID
  findOne(id: number): EvaluacionInicial | undefined {
    return this.evaluacionesIniciales.find((evaluacion) => evaluacion.id === id);
  }

  // Crear una nueva evaluación
  create(body): EvaluacionInicial {
    const nuevaEvaluacion: EvaluacionInicial = {
      id: this.evaluacionesIniciales.length + 1,
      ...body,
      fecha_creacion: new Date(),
    };
    this.evaluacionesIniciales.push(nuevaEvaluacion);
    return nuevaEvaluacion;
  }

  // Actualizar una evaluación por ID
  update(id: number, updateDto: UpdateEvaluacionInicialDto): EvaluacionInicial {
    const index = this.evaluacionesIniciales.findIndex((evaluacion) => evaluacion.id === id);
    if (index === -1) {
      throw new Error('Evaluación no encontrada');
    }
    const evaluacionActualizada = {
      ...this.evaluacionesIniciales[index],
      ...updateDto,
    };
    this.evaluacionesIniciales[index] = evaluacionActualizada;
    return evaluacionActualizada;
  }

  // Eliminar una evaluación por ID
  remove(id: number): string {
    this.evaluacionesIniciales = this.evaluacionesIniciales.filter((evaluacion) => evaluacion.id !== id);
    return 'Evaluación eliminada';
  }
}
