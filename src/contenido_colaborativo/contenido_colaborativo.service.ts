import { Injectable } from '@nestjs/common';
import { CreateContenidoColaborativoDto } from './dto/create-contenido_colaborativo.dto';
import { UpdateContenidoColaborativoDto } from './dto/update-contenido_colaborativo.dto';
import { ContenidoColaborativo } from './entities/contenido_colaborativo.entity';

@Injectable()
export class ContenidoColaborativoService {
  // Lista de contenidos colaborativos simulada
  private contenidoColaborativo: ContenidoColaborativo[] = [
    {
      id: 1,
      id_autor: '1',
      titulo: 'Introducción a NestJS',
      contenido: 'NestJS es un framework para Node.js...',
      categoria: 'Tecnología',
      fecha_creacion: new Date(),
    },
    {
      id: 2,
      id_autor: '2',
      titulo: 'Guía de React',
      contenido: 'React es una librería de JavaScript...',
      categoria: 'Tecnología',
      fecha_creacion: new Date(),
    },
    {
      id: 3,
      id_autor: '3',
      titulo: 'Viajar por el Mundo',
      contenido: 'Explorar nuevas culturas...',
      categoria: 'Viajes',
      fecha_creacion: new Date(),
    },
  ];

  // Retorna todos los contenidos colaborativos
  findAll(): ContenidoColaborativo[] {
    return this.contenidoColaborativo;
  }

  // Buscar contenido colaborativo por ID
  findOne(id: number): ContenidoColaborativo | undefined {
    return this.contenidoColaborativo.find((contenido) => contenido.id === id);
  }

  create(body): CreateContenidoColaborativoDto {
      const NewContenido: ContenidoColaborativo = {
        id: this.contenidoColaborativo.length + 1,
        ...body,
        fecha_creacion: new Date(),
      };
      this.contenidoColaborativo.push(NewContenido);
      return NewContenido;
    }

  // Actualizar un contenido colaborativo por ID
  update(id: number, updateContenidoColaborativoDto: UpdateContenidoColaborativoDto): ContenidoColaborativo {
    const contenidoIndex = this.contenidoColaborativo.findIndex((contenido) => contenido.id === id);
    if (contenidoIndex === -1) {
      throw new Error('Contenido no encontrado');
    }
    const updatedContenido = { ...this.contenidoColaborativo[contenidoIndex], ...updateContenidoColaborativoDto };
    this.contenidoColaborativo[contenidoIndex] = updatedContenido;
    return updatedContenido;
  }

  // Eliminar un contenido colaborativo por ID
  remove(id: number): string {
    this.contenidoColaborativo = this.contenidoColaborativo.filter((contenido) => contenido.id !== id);
    return 'Contenido colaborativo eliminado';
  }
}
