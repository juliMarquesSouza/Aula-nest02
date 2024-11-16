import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [PacienteModule, UsuarioModule, RepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
