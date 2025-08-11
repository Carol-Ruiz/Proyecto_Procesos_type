import { Module } from '@nestjs/common';
import { MetricasSesionService } from './metricas_sesion.service';
import { MetricasSesionController } from './metricas_sesion.controller';

@Module({
  controllers: [MetricasSesionController],
  providers: [MetricasSesionService],
})
export class MetricasSesionModule {}
