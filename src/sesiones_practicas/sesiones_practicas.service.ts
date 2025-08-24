import { Injectable } from '@nestjs/common';
import { CreateSesionesPracticaDto } from './dto/create-sesiones_practica.dto';
import { UpdateSesionesPracticaDto } from './dto/update-sesiones_practica.dto';
import { SesionesPractica } from './entities/sesiones_practica.entity';

@Injectable()
export class SesionesPracticasService {
  private sesionespractica: SesionesPractica[] = [
    {
      id: 1,
      id_usuario: 'usuario_1',
      id_tipo_tecnica: 'Pomodoro',
      materia: 'Matemáticas',
      tipo_meditacion: 'Ninguna',
      duracion_planificada: '2 horas',
      duracion_real: '1.5 horas',
      ciclos_completados: '6',
      ciclos_planificados: '6',
      nivel_concentracion: 'Alto',
      interrupciones: '1',
      calidad_sesion: 'Alta',
      estado: 'Completada',
      dificultad: 'Media',
      notas_usuario: 'La sesión fue productiva, pero tuve que hacer una pausa más larga de lo previsto debido a una interrupción.',
      resultados: 'Completé todos los ejercicios planeados, pero no pude resolver un problema de álgebra complejo.',
      configuracion_practica: 'Usé 25 minutos de estudio seguidos de 5 minutos de descanso. Al final, tomé una pausa de 10 minutos para relajarme.',
      fecha_inicio: new Date('2025-08-20T10:00:00'),
      fecha_fin: new Date('2025-08-20T11:30:00'),
    },
    {
      id: 2,
      id_usuario: 'usuario_2',
      id_tipo_tecnica: 'Repetición Espaciada',
      materia: 'Biología',
      tipo_meditacion: 'Mindfulness',
      duracion_planificada: '1 hora',
      duracion_real: '1 hora',
      ciclos_completados: '4',
      ciclos_planificados: '4',
      nivel_concentracion: 'Medio',
      interrupciones: '0',
      calidad_sesion: 'Media',
      estado: 'Completada',
      dificultad: 'Alta',
      notas_usuario: 'Tuve dificultades con algunos conceptos sobre genética, pero el mindfulness me ayudó a mantener la calma.',
      resultados: 'Repasé las tarjetas de estudio, pero necesito más repeticiones para recordar todos los detalles.',
      configuracion_practica: 'Estudié 20 minutos por cada ciclo con 5 minutos de descanso entre ciclos. Después de cada ciclo, realicé una breve sesión de meditación.',
      fecha_inicio: new Date('2025-08-22T09:00:00'),
      fecha_fin: new Date('2025-08-22T10:00:00'),
    },
    {
      id: 3,
      id_usuario: 'usuario_3',
      id_tipo_tecnica: 'Resúmenes Visuales',
      materia: 'Historia',
      tipo_meditacion: 'Ninguna',
      duracion_planificada: '1.5 horas',
      duracion_real: '1 hora',
      ciclos_completados: '3',
      ciclos_planificados: '4',
      nivel_concentracion: 'Bajo',
      interrupciones: '3',
      calidad_sesion: 'Baja',
      estado: 'Incompleta',
      dificultad: 'Baja',
      notas_usuario: 'Estaba distraído por el ruido externo, lo que afectó mi capacidad de concentración.',
      resultados: 'Creé los mapas mentales, pero no pude terminar de organizar todas las fechas importantes.',
      configuracion_practica: 'Cada ciclo fue de 20 minutos de trabajo con 10 minutos de descanso. Durante el descanso, me levanté para caminar.',
      fecha_inicio: new Date('2025-08-23T13:00:00'),
      fecha_fin: new Date('2025-08-23T14:00:00'),
    },
    {
      id: 4,
      id_usuario: 'usuario_4',
      id_tipo_tecnica: 'Autoexamen',
      materia: 'Química',
      tipo_meditacion: 'Respiración profunda',
      duracion_planificada: '1 hora',
      duracion_real: '1 hora',
      ciclos_completados: '4',
      ciclos_planificados: '4',
      nivel_concentracion: 'Alto',
      interrupciones: '0',
      calidad_sesion: 'Alta',
      estado: 'Completada',
      dificultad: 'Alta',
      notas_usuario: 'Me sentí muy concentrado durante toda la sesión, la respiración profunda me ayudó a mantener la calma.',
      resultados: 'Completé todos los exámenes y revisé las respuestas incorrectas para mejorar mi comprensión.',
      configuracion_practica: 'Estudié durante 15 minutos por ciclo, seguido de 5 minutos de descanso con respiración profunda.',
      fecha_inicio: new Date('2025-08-21T17:00:00'),
      fecha_fin: new Date('2025-08-21T18:00:00'),
    },
    {
      id: 5,
      id_usuario: 'usuario_5',
      id_tipo_tecnica: 'Técnica Feynman',
      materia: 'Física',
      tipo_meditacion: 'Ninguna',
      duracion_planificada: '2 horas',
      duracion_real: '2 horas',
      ciclos_completados: '4',
      ciclos_planificados: '4',
      nivel_concentracion: 'Alto',
      interrupciones: '1',
      calidad_sesion: 'Alta',
      estado: 'Completada',
      dificultad: 'Media',
      notas_usuario: 'Me fue muy bien explicando los conceptos en voz alta, pero tuve una interrupción por un mensaje en el teléfono.',
      resultados: 'Revisé todos los conceptos importantes y logré explicarlos con claridad como si estuviera enseñando a alguien más.',
      configuracion_practica: 'Utilicé 30 minutos por ciclo, explicando los conceptos a mí mismo, con 10 minutos de descanso entre ciclos.',
      fecha_inicio: new Date('2025-08-19T09:00:00'),
      fecha_fin: new Date('2025-08-19T11:00:00'),
    },
  ];

  // Retorna todas las sesiones de práctica
  findAll(): SesionesPractica[] {
    return this.sesionespractica;
  }

  // Buscar sesión de práctica por ID
  findOne(id: number): SesionesPractica | undefined {
    return this.sesionespractica.find((sesion) => sesion.id === id);
  }

  // Crear una nueva sesión de práctica
  create(body): SesionesPractica {
    const nuevaSesion: SesionesPractica = {
      id: this.sesionespractica.length + 1,
      ...body,
      fecha_inicio: new Date(), // Fecha de inicio se asigna al momento de crear
      fecha_fin: new Date(),    // Fecha de fin también
    };
    this.sesionespractica.push(nuevaSesion);
    return nuevaSesion;
  }

  // Actualizar una sesión de práctica existente por ID
  update(id: number, updateDto: UpdateSesionesPracticaDto): SesionesPractica {
    const index = this.sesionespractica.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error('Sesión de práctica no encontrada');
    }
    const sesionActualizada = {
      ...this.sesionespractica[index],
      ...updateDto,
    };
    this.sesionespractica[index] = sesionActualizada;
    return sesionActualizada;
  }

  // Eliminar una sesión de práctica por ID
  remove(id: number): string {
    this.sesionespractica = this.sesionespractica.filter((s) => s.id !== id);
    return 'Sesión de práctica eliminada';
  }
}
