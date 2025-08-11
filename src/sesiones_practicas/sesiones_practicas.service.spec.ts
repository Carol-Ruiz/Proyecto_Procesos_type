import { Test, TestingModule } from '@nestjs/testing';
import { SesionesPracticasService } from './sesiones_practicas.service';

describe('SesionesPracticasService', () => {
  let service: SesionesPracticasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SesionesPracticasService],
    }).compile();

    service = module.get<SesionesPracticasService>(SesionesPracticasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
