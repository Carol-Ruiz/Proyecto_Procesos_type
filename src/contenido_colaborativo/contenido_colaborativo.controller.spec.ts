import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoColaborativoController } from './contenido_colaborativo.controller';
import { ContenidoColaborativoService } from './contenido_colaborativo.service';

describe('ContenidoColaborativoController', () => {
  let controller: ContenidoColaborativoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContenidoColaborativoController],
      providers: [ContenidoColaborativoService],
    }).compile();

    controller = module.get<ContenidoColaborativoController>(ContenidoColaborativoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
