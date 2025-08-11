import { Module } from '@nestjs/common';
import { SoporteTecnicoService } from './soporte_tecnico.service';
import { SoporteTecnicoController } from './soporte_tecnico.controller';

@Module({
  controllers: [SoporteTecnicoController],
  providers: [SoporteTecnicoService],
})
export class SoporteTecnicoModule {}
