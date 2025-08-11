import { Module } from '@nestjs/common';
import { TipoTecnicaService } from './tipo_tecnica.service';
import { TipoTecnicaController } from './tipo_tecnica.controller';

@Module({
  controllers: [TipoTecnicaController],
  providers: [TipoTecnicaService],
})
export class TipoTecnicaModule {}
