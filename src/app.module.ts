import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComunidadModule } from './comunidad/comunidad.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SesionesPracticasModule } from './sesiones_practicas/sesiones_practicas.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { TipoTecnicaModule } from './tipo_tecnica/tipo_tecnica.module';
import { ProgresoModule } from './progreso/progreso.module';
import { ContenidoColaborativoModule } from './contenido_colaborativo/contenido_colaborativo.module';
import { ReporteModule } from './reporte/reporte.module';
import { RecordatorioModule } from './recordatorio/recordatorio.module';
import { MetricasSesionModule } from './metricas_sesion/metricas_sesion.module';
import { ParticipacionModule } from './participacion/participacion.module';
import { GamificacionModule } from './gamificacion/gamificacion.module';
import { SoporteTecnicoModule } from './soporte_tecnico/soporte_tecnico.module';
import { EvaluacionInicialModule } from './evaluacion_inicial/evaluacion_inicial.module';
import { AlgoritmoIaModule } from './algoritmo_ia/algoritmo_ia.module';
import { DatosPersonalesModule } from './datos_personales/datos_personales.module';

@Module({
  imports: [ComunidadModule, UsuarioModule, SesionesPracticasModule, NotificacionesModule, TipoTecnicaModule, ProgresoModule, ContenidoColaborativoModule, ReporteModule, RecordatorioModule, MetricasSesionModule, ParticipacionModule, GamificacionModule, SoporteTecnicoModule, EvaluacionInicialModule,  AlgoritmoIaModule, DatosPersonalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
