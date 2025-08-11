import { Module } from '@nestjs/common';
import { GamificacionService } from './gamificacion.service';
import { GamificacionController } from './gamificacion.controller';

@Module({
  controllers: [GamificacionController],
  providers: [GamificacionService],
})
export class GamificacionModule {}
