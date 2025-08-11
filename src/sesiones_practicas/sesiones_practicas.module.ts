import { Module } from '@nestjs/common';
import { SesionesPracticasService } from './sesiones_practicas.service';
import { SesionesPracticasController } from './sesiones_practicas.controller';

@Module({
  controllers: [SesionesPracticasController],
  providers: [SesionesPracticasService],
})
export class SesionesPracticasModule {}
