import { Module } from '@nestjs/common';
import { ContenidoColaborativoService } from './contenido_colaborativo.service';
import { ContenidoColaborativoController } from './contenido_colaborativo.controller';

@Module({
  controllers: [ContenidoColaborativoController],
  providers: [ContenidoColaborativoService],
})
export class ContenidoColaborativoModule {}
