import { Module } from '@nestjs/common';
import { DatosPersonalesService } from './datos_personales.service';
import { DatosPersonalesController } from './datos_personales.controller';

@Module({
  controllers: [DatosPersonalesController],
  providers: [DatosPersonalesService],
})
export class DatosPersonalesModule {}
