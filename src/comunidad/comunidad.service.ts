import { Injectable } from '@nestjs/common';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
import { Comunidad } from './entities/comunidad.entity'; 

@Injectable()
export class ComunidadService {
  // Propiedad privada
  private comunidad: Comunidad[] = [
    {
      id: 1,
      name: 'Comunidad de Desarrolladores',
      descripcion: 'Grupo de personas interesadas en el desarrollo de software',
      categoria: 'grupal',
      fecha_creacion: new Date(),
    },
    {
      id: 2,
      name: 'Comunidad de Lectores',
      descripcion: 'Comunidad de personas apasionadas por la lectura',
      categoria: 'grupal',
      fecha_creacion: new Date(),
    },
    {
      id: 3,
      name: 'Comunidad de Viajeros',
      descripcion: 'Comunidad de amantes de los viajes y la aventura',
      categoria: 'grupal',
      fecha_creacion: new Date(),
    },
  ];

  // Método que retorna todo el array
  findAll(): Comunidad[] {
    return this.comunidad;
  }

  // Método para buscar la comunidad por id
  findOne(id: number): Comunidad | undefined {
    return this.comunidad.find((comunidad) => comunidad.id === id);
  }

  // Añadir una nueva comunidad
  create(body): Comunidad {
    const newComunidad: Comunidad = {
      id: this.comunidad.length + 1,
      ...body,
      fecha_creacion: new Date(),
    };
    this.comunidad.push(newComunidad);
    return newComunidad;
  }
// Actualizar 

// Servicio: ComunidadService
update(id: number, updateComunidadDto: UpdateComunidadDto): Comunidad {
  const comunidadIndex = this.comunidad.findIndex((comunidad) => comunidad.id === id);
  if (comunidadIndex === -1) {
    throw new Error('Comunidad no encontrada');
  }
  const updatedComunidad = { ...this.comunidad[comunidadIndex], ...updateComunidadDto };
  this.comunidad[comunidadIndex] = updatedComunidad;
  return updatedComunidad;
}



  // Eliminar un elemento del arreglo de comunidad por id
  remove(id: number): string {
    this.comunidad = this.comunidad.filter((comunidad) => comunidad.id !== id);
    return "Elemento eliminado";
  }
}
