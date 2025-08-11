import { Test, TestingModule } from '@nestjs/testing';
import { SesionesPracticasController } from './sesiones_practicas.controller';
import { SesionesPracticasService } from './sesiones_practicas.service';

describe('SesionesPracticasController', () => {
  let controller: SesionesPracticasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SesionesPracticasController],
      providers: [SesionesPracticasService],
    }).compile();

    controller = module.get<SesionesPracticasController>(SesionesPracticasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
