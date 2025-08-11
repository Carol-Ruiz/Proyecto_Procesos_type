import { Test, TestingModule } from '@nestjs/testing';
import { GamificacionController } from './gamificacion.controller';
import { GamificacionService } from './gamificacion.service';

describe('GamificacionController', () => {
  let controller: GamificacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamificacionController],
      providers: [GamificacionService],
    }).compile();

    controller = module.get<GamificacionController>(GamificacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
