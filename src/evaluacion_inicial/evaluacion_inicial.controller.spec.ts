import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionInicialController } from './evaluacion_inicial.controller';
import { EvaluacionInicialService } from './evaluacion_inicial.service';

describe('EvaluacionInicialController', () => {
  let controller: EvaluacionInicialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluacionInicialController],
      providers: [EvaluacionInicialService],
    }).compile();

    controller = module.get<EvaluacionInicialController>(EvaluacionInicialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
