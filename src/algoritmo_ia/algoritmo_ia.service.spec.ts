import { Test, TestingModule } from '@nestjs/testing';
import { AlgoritmoIaService } from './algoritmo_ia.service';

describe('AlgoritmoIaService', () => {
  let service: AlgoritmoIaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlgoritmoIaService],
    }).compile();

    service = module.get<AlgoritmoIaService>(AlgoritmoIaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
