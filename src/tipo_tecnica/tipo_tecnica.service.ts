import { Injectable } from '@nestjs/common';
import { CreateTipoTecnicaDto } from './dto/create-tipo_tecnica.dto';
import { UpdateTipoTecnicaDto } from './dto/update-tipo_tecnica.dto';
import { TipoTecnica } from './entities/tipo_tecnica.entity';

@Injectable()
export class TipoTecnicaService {
  private tipotecnica: TipoTecnica[] = [
    {
      id: 1,
      nombre: 'Pomodoro',
      descripcion: 'Técnica de gestión del tiempo que divide el estudio en intervalos de 25 minutos, seguidos por breves descansos.',
      categoria: 'Gestión del tiempo',
      nivel_requerido: 'Básico',
      duracion_base: '25 minutos',
      duracion_descanso: '5 minutos',
      ciclos_recomendados: '4 ciclos',
      instrucciones: 'Estudia durante 25 minutos y luego toma un descanso de 5 minutos. Después de 4 ciclos, toma un descanso más largo de 15-30 minutos.',
      parametros_configurables: 'Duración de los ciclos y descansos, cantidad de ciclos antes del descanso largo.',
      activo: 'sí',
      fecha_creacion: new Date('2025-08-19T09:00:00'),
    },
    {
      id: 2,
      nombre: 'Repetición Espaciada',
      descripcion: 'Método de memorización que implica revisar la información en intervalos crecientes para mejorar la retención a largo plazo.',
      categoria: 'Memorización',
      nivel_requerido: 'Intermedio',
      duracion_base: 'Variable',
      duracion_descanso: 'Variable',
      ciclos_recomendados: 'Según la dificultad de la información',
      instrucciones: 'Revisa tarjetas de estudio o contenido en intervalos de tiempo que se van incrementando conforme mejora la retención.',
      parametros_configurables: 'Intervalos de repaso, frecuencia de las sesiones, cantidad de material por sesión.',
      activo: 'sí',
      fecha_creacion: new Date('2025-08-20T10:00:00'),
    },
    {
      id: 3,
      nombre: 'Técnica Feynman',
      descripcion: 'Método para aprender y entender un concepto al explicarlo de manera sencilla, como si lo estuvieras enseñando a otra persona.',
      categoria: 'Comprensión profunda',
      nivel_requerido: 'Avanzado',
      duracion_base: '30 minutos',
      duracion_descanso: '5 minutos',
      ciclos_recomendados: '3-4 ciclos',
      instrucciones: 'Escribe el concepto en tus propias palabras y enseña lo que has aprendido de manera simple. Si no puedes explicar algo, repásalo hasta entenderlo.',
      parametros_configurables: 'Duración de los ciclos y descansos, complejidad del concepto.',
      activo: 'sí',
      fecha_creacion: new Date('2025-08-21T11:00:00'),
    },
    {
      id: 4,
      nombre: 'Resumen Visual',
      descripcion: 'Método de estudio que utiliza diagramas, mapas mentales o infografías para representar visualmente la información y las relaciones entre conceptos.',
      categoria: 'Organización de información',
      nivel_requerido: 'Intermedio',
      duracion_base: '45 minutos',
      duracion_descanso: '10 minutos',
      ciclos_recomendados: '2-3 ciclos',
      instrucciones: 'Crea mapas mentales, diagramas o resúmenes visuales para organizar la información clave de un tema.',
      parametros_configurables: 'Duración de los ciclos, tipo de mapa visual o diagrama, cantidad de información por sesión.',
      activo: 'sí',
      fecha_creacion: new Date('2025-08-22T12:30:00'),
    },
    {
      id: 5,
      nombre: 'Lectura Crítica',
      descripcion: 'Método para mejorar la comprensión y el análisis de textos mediante la evaluación activa del contenido mientras se lee.',
      categoria: 'Comprensión lectora',
      nivel_requerido: 'Intermedio',
      duracion_base: '60 minutos',
      duracion_descanso: '10 minutos',
      ciclos_recomendados: '2 ciclos',
      instrucciones: 'Lee activamente el material, haciendo preguntas, subrayando puntos clave y tomando notas para reflexionar sobre el contenido.',
      parametros_configurables: 'Duración de los ciclos, enfoque de análisis, tipo de material leído.',
      activo: 'sí',
      fecha_creacion: new Date('2025-08-23T14:00:00'),
    }
  ];

  // Retorna todos los tipos de técnica
  findAll(): TipoTecnica[] {
    return this.tipotecnica;
  }

  // Buscar un tipo de técnica por ID
  findOne(id: number): TipoTecnica | undefined {
    return this.tipotecnica.find((tecnica) => tecnica.id === id);
  }

  // Crear un nuevo tipo de técnica
  create(body): TipoTecnica {
    const nuevoTipoTecnica: TipoTecnica = {
      id: this.tipotecnica.length + 1,
      ...body,
      fecha_creacion: new Date(),
    };
    this.tipotecnica.push(nuevoTipoTecnica);
    return nuevoTipoTecnica;
  }
 
  // Actualizar un tipo de técnica existente por ID
  update(id: number, updateTipoTecnicaDto: UpdateTipoTecnicaDto): TipoTecnica {
    const index = this.tipotecnica.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error('Tipo de técnica no encontrado');
    }
    const tipoTecnicaActualizada = {
      ...this.tipotecnica[index],
      ...updateTipoTecnicaDto,
    };
    this.tipotecnica[index] = tipoTecnicaActualizada;
    return tipoTecnicaActualizada;
  }

  // Eliminar un tipo de técnica por ID
  remove(id: number): string {
    const index = this.tipotecnica.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error('Tipo de técnica no encontrado');
    }
    this.tipotecnica.splice(index, 1);
    return `Tipo de técnica con id ${id} eliminado`;
  }
}
