import { Test, TestingModule } from '@nestjs/testing';
import { TipoTecnicaService } from './tipo_tecnica.service';

describe('TipoTecnicaService', () => {
  let service: TipoTecnicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoTecnicaService],
    }).compile();

    service = module.get<TipoTecnicaService>(TipoTecnicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
