import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { TurmaController } from "./controller/turma.controller";
import { TurmaService } from "./service/turma.service";
import { Turmas } from "./entities/turma.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Turmas])],
    providers:[TurmaService] ,
    controllers:[TurmaController],
    exports:[TypeOrmModule]

})

export class TurmaModule { }