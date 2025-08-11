import { Test, TestingModule } from '@nestjs/testing';
import { AlgoritmoIaController } from './algoritmo_ia.controller';
import { AlgoritmoIaService } from './algoritmo_ia.service';

describe('AlgoritmoIaController', () => {
  let controller: AlgoritmoIaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlgoritmoIaController],
      providers: [AlgoritmoIaService],
    }).compile();

    controller = module.get<AlgoritmoIaController>(AlgoritmoIaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
