import { Test, TestingModule } from '@nestjs/testing';
import { SoporteTecnicoService } from './soporte_tecnico.service';

describe('SoporteTecnicoService', () => {
  let service: SoporteTecnicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoporteTecnicoService],
    }).compile();

    service = module.get<SoporteTecnicoService>(SoporteTecnicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
