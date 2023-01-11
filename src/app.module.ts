import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Turmas } from './turma/entities/turma.entity';
import { TurmaModule } from './turma/turma.module';
import { Grupos } from './grupo/entities/grupo.entity';
import { GrupoModule } from './grupo/grupo.module';
import { Projetos } from './projeto/entities/projeto.entity';
import { ProjetoModule } from './projeto/projeto.module';


@Module({
  imports: [

    //UTILIZE ISSO AQUI EM BAIXO PARA FAZER OS TESTES, SE TIVER TUDO OK O DEPLOY É O DE BAIXO
    
    TypeOrmModule.forRoot({
    type: 'mysql',
     host: 'localhost',
     port: 3306,
      username: 'root',
      password: 'root',
     database: 'db_minihackathon',
     entities: [Turmas,Grupos,Projetos],
     synchronize: true
    }), TurmaModule,GrupoModule,ProjetoModule,
    
  // TypeOrmModule.forRoot({
  //   type:'postgres',
  //   url: process.env.DATABASE_URL,
  //   logging: false,
  //   dropSchema: false,
  //   ssl: {
  //     rejectUnauthorized: false
  //  },
  //   synchronize: true,
  //   autoLoadEntities: true,
  // }),  
    
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}