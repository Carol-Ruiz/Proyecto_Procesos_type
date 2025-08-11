import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoColaborativoService } from './contenido_colaborativo.service';

describe('ContenidoColaborativoService', () => {
  let service: ContenidoColaborativoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContenidoColaborativoService],
    }).compile();

    service = module.get<ContenidoColaborativoService>(ContenidoColaborativoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
