import { Test, TestingModule } from '@nestjs/testing';
import { MetricasSesionController } from './metricas_sesion.controller';
import { MetricasSesionService } from './metricas_sesion.service';

describe('MetricasSesionController', () => {
  let controller: MetricasSesionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetricasSesionController],
      providers: [MetricasSesionService],
    }).compile();

    controller = module.get<MetricasSesionController>(MetricasSesionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
