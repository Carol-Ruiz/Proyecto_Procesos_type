import { Test, TestingModule } from '@nestjs/testing';
import { TipoTecnicaController } from './tipo_tecnica.controller';
import { TipoTecnicaService } from './tipo_tecnica.service';

describe('TipoTecnicaController', () => {
  let controller: TipoTecnicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoTecnicaController],
      providers: [TipoTecnicaService],
    }).compile();

    controller = module.get<TipoTecnicaController>(TipoTecnicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
