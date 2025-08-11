import { Module } from '@nestjs/common';
import { ParticipacionService } from './participacion.service';
import { ParticipacionController } from './participacion.controller';

@Module({
  controllers: [ParticipacionController],
  providers: [ParticipacionService],
})
export class ParticipacionModule {}
