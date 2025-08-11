import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionInicialService } from './evaluacion_inicial.service';

describe('EvaluacionInicialService', () => {
  let service: EvaluacionInicialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluacionInicialService],
    }).compile();

    service = module.get<EvaluacionInicialService>(EvaluacionInicialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
