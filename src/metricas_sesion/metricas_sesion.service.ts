import { Injectable } from '@nestjs/common';
import { CreateMetricasSesionDto } from './dto/create-metricas_sesion.dto';
import { UpdateMetricasSesionDto } from './dto/update-metricas_sesion.dto';

@Injectable()
export class MetricasSesionService {
  create(createMetricasSesionDto: CreateMetricasSesionDto) {
    return 'This action adds a new metricasSesion';
  }

  findAll() {
    return `This action returns all metricasSesion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metricasSesion`;
  }

  update(id: number, updateMetricasSesionDto: UpdateMetricasSesionDto) {
    return `This action updates a #${id} metricasSesion`;
  }

  remove(id: number) {
    return `This action removes a #${id} metricasSesion`;
  }
}
