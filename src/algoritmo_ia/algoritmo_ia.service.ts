import { Injectable } from '@nestjs/common';
import { CreateAlgoritmoIaDto } from './dto/create-algoritmo_ia.dto';
import { UpdateAlgoritmoIaDto } from './dto/update-algoritmo_ia.dto';
import { AlgoritmoIa } from './entities/algoritmo_ia.entity';

@Injectable()
export class AlgoritmoIaService {
  private algoritmoia: AlgoritmoIa[] = [
    {
      id: 1,
      id_usuario: 'usuario_1',
      categoria: 'Recomendaciones de estudio',
      datos: '{"tema": "Física", "recomendaciones": ["Repetición espaciada", "Técnica Feynman"]}',
      fecha_creacion: new Date('2025-08-20T08:00:00'),
      permisos: 'leer, escribir, modificar',
    },
    {
      id: 2,
      id_usuario: 'usuario_2',
      categoria: 'Análisis de progreso',
      datos: '{"progreso": "80%", "sesiones_completadas": 10, "areas_necesarias": ["Álgebra", "Cálculo"]}',
      fecha_creacion: new Date('2025-08-21T10:30:00'),
      permisos: 'leer, modificar',
    },
    {
      id: 3,
      id_usuario: 'usuario_3',
      categoria: 'Personalización de técnicas',
      datos: '{"tecnica": "Pomodoro", "configuracion": {"duracion_ciclo": 25, "descanso": 5}}',
      fecha_creacion: new Date('2025-08-22T09:15:00'),
      permisos: 'leer, escribir',
    },
    {
      id: 4,
      id_usuario: 'usuario_4',
      categoria: 'Generación de reportes',
      datos: '{"tipo_reporte": "progreso", "contenido": "Informe de rendimiento mensual", "resultado": "Excelente"}',
      fecha_creacion: new Date('2025-08-23T14:00:00'),
      permisos: 'leer, generar, modificar',
    },
    {
      id: 5,
      id_usuario: 'usuario_5',
      categoria: 'Evaluación de estrategias de estudio',
      datos: '{"estrategia": "Repetición espaciada", "eficacia": "Alta", "frecuencia": "diaria"}',
      fecha_creacion: new Date('2025-08-19T11:45:00'),
      permisos: 'leer',
    },
  ];

  // Retorna todos los algoritmos de IA
  findAll(): AlgoritmoIa[] {
    return this.algoritmoia;
  }

  // Buscar un algoritmo de IA por ID
  findOne(id: number): AlgoritmoIa | undefined {
    return this.algoritmoia.find((algoritmo) => algoritmo.id === id);
  }

  // Crear un nuevo algoritmo de IA
  create(body): AlgoritmoIa {
    const nuevoAlgoritmo: AlgoritmoIa = {
      id: this.algoritmoia.length + 1,
      ...body,
      fecha_creacion: new Date(), // Fecha de creación al crear el algoritmo
    };
    this.algoritmoia.push(nuevoAlgoritmo);
    return nuevoAlgoritmo;
  }

  // Actualizar un algoritmo de IA existente por ID
  update(id: number, updateAlgoritmoIaDto: UpdateAlgoritmoIaDto): AlgoritmoIa {
    const index = this.algoritmoia.findIndex((algoritmo) => algoritmo.id === id);
    if (index === -1) {
      throw new Error('Algoritmo IA no encontrado');
    }
    const algoritmoActualizado = {
      ...this.algoritmoia[index],
      ...updateAlgoritmoIaDto,
    };
    this.algoritmoia[index] = algoritmoActualizado;
    return algoritmoActualizado;
  }

  // Eliminar un algoritmo de IA por ID
  remove(id: number): string {
    const index = this.algoritmoia.findIndex((algoritmo) => algoritmo.id === id);
    if (index === -1) {
      throw new Error('Algoritmo IA no encontrado');
    }
    this.algoritmoia.splice(index, 1);
    return `Algoritmo IA con id ${id} eliminado`;
  }
}
