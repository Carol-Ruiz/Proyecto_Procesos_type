import { Injectable } from '@nestjs/common';
import { CreateGamificacionDto } from './dto/create-gamificacion.dto';
import { UpdateGamificacionDto } from './dto/update-gamificacion.dto';
import { Gamificacion } from './entities/gamificacion.entity';

@Injectable()
export class GamificacionService {
  private gamificaciones: Gamificacion[] = [
    {
      id: 1,
      logro: 'Finalizar curso de técnicas de estudio',
      puntos: '50',
      insignia: 'Estudiante Proactivo',
      fecha_obtencion: new Date('2023-03-05'),
    },
    {
      id: 2,
      logro: 'Completar evaluación inicial con más del 80%',
      puntos: '30',
      insignia: 'Cerebro Ágil',
      fecha_obtencion: new Date('2023-04-15'),
    },
    {
      id: 3,
      logro: 'Participar en 3 foros de discusión sobre técnicas de aprendizaje',
      puntos: '20',
      insignia: 'Colaborador Activo',
      fecha_obtencion: new Date('2023-05-10'),
    },
    {
      id: 4,
      logro: 'Terminar todas las actividades de un módulo en tiempo récord',
      puntos: '40',
      insignia: 'Speed Learner',
      fecha_obtencion: new Date('2023-06-20'),
    },
    {
      id: 5,
      logro: 'Revisar todos los materiales de un tema antes de la evaluación',
      puntos: '25',
      insignia: 'Preparado al 100%',
      fecha_obtencion: new Date('2023-07-05'),
    },
  ];

  // Retorna todas las gamificaciones
  findAll(): Gamificacion[] {
    return this.gamificaciones;
  }

  // Buscar gamificación por ID
  findOne(id: number): Gamificacion | undefined {
    return this.gamificaciones.find((gamificacion) => gamificacion.id === id);
  }

  // Crear una nueva gamificación
  create(body): Gamificacion {
    const nuevaGamificacion: Gamificacion = {
      id: this.gamificaciones.length + 1,
      ...body,
      fecha_creacion: new Date(),
    };
    this.gamificaciones.push(nuevaGamificacion);
    return nuevaGamificacion;
  }

  // Actualizar una gamificación por ID
  update(id: number, updateGamificacionDto: UpdateGamificacionDto): Gamificacion {
    const gamificacionIndex = this.gamificaciones.findIndex(
      (gamificacion) => gamificacion.id === id
    );
    if (gamificacionIndex === -1) {
      throw new Error('Gamificación no encontrada');
    }
    const gamificacionActualizada = {
      ...this.gamificaciones[gamificacionIndex],
      ...updateGamificacionDto,
    };
    this.gamificaciones[gamificacionIndex] = gamificacionActualizada;
    return gamificacionActualizada;
  }

  // Eliminar una gamificación por ID
  remove(id: number): string {
    this.gamificaciones = this.gamificaciones.filter(
      (gamificacion) => gamificacion.id !== id
    );
    return 'Gamificación eliminada';
  }
}
