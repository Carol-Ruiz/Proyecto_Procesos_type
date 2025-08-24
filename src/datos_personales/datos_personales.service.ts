import { Injectable } from '@nestjs/common';
import { CreateDatosPersonaleDto } from './dto/create-datos_personale.dto';
import { UpdateDatosPersonaleDto } from './dto/update-datos_personale.dto';
import { DatosPersonales } from './entities/datos_personales.entity';

@Injectable()
export class DatosPersonalesService {
  private datosPersonales: DatosPersonales[] = [
    {
      id: 1,
      categoria: 'Empleado',
      fecha_creacion: new Date('2023-01-15'),
    },
    {
      id: 2,
      categoria: 'Estudiante',
      fecha_creacion: new Date('2023-02-10'),
    },
    {
      id: 3,
      categoria: 'Freelancer',
      fecha_creacion: new Date('2023-03-22'),
    },
    {
      id: 4,
      categoria: 'Emprendedor',
      fecha_creacion: new Date('2023-04-05'),
    },
    {
      id: 5,
      categoria: 'Profesor',
      fecha_creacion: new Date('2023-06-18'),
    },
  ];

  // Retorna todos los datos personales
  findAll(): DatosPersonales[] {
    return this.datosPersonales;
  }

  // Buscar un dato personal por ID
  findOne(id: number): DatosPersonales | undefined {
    return this.datosPersonales.find((dato) => dato.id === id);
  }

  // Crear un nuevo dato personal
  create(body): DatosPersonales {
    const nuevoDato: DatosPersonales = {
      id: this.datosPersonales.length + 1,
      ...body,
      fecha_creacion: new Date(),
    };
    this.datosPersonales.push(nuevoDato);
    return nuevoDato;
  }

  // Actualizar un dato personal por ID
  update(id: number, updateDto: UpdateDatosPersonaleDto): DatosPersonales {
    const index = this.datosPersonales.findIndex((dato) => dato.id === id);
    if (index === -1) {
      throw new Error('Dato personal no encontrado');
    }
    const datoActualizado = {
      ...this.datosPersonales[index],
      ...updateDto,
    };
    this.datosPersonales[index] = datoActualizado;
    return datoActualizado;
  }

  // Eliminar un dato personal por ID
  remove(id: number): string {
    this.datosPersonales = this.datosPersonales.filter((dato) => dato.id !== id);
    return 'Dato personal eliminado';
  }
}
