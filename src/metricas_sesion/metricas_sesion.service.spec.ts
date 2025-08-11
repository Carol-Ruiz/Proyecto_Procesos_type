import { Test, TestingModule } from '@nestjs/testing';
import { MetricasSesionService } from './metricas_sesion.service';

describe('MetricasSesionService', () => {
  let service: MetricasSesionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetricasSesionService],
    }).compile();

    service = module.get<MetricasSesionService>(MetricasSesionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
