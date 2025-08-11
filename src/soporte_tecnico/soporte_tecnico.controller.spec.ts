import { Test, TestingModule } from '@nestjs/testing';
import { SoporteTecnicoController } from './soporte_tecnico.controller';
import { SoporteTecnicoService } from './soporte_tecnico.service';

describe('SoporteTecnicoController', () => {
  let controller: SoporteTecnicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoporteTecnicoController],
      providers: [SoporteTecnicoService],
    }).compile();

    controller = module.get<SoporteTecnicoController>(SoporteTecnicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
