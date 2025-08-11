import { Module } from '@nestjs/common';
import { AlgoritmoIaService } from './algoritmo_ia.service';
import { AlgoritmoIaController } from './algoritmo_ia.controller';

@Module({
  controllers: [AlgoritmoIaController],
  providers: [AlgoritmoIaService],
})
export class AlgoritmoIaModule {}
