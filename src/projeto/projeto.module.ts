import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Projetos } from "./entities/projeto.entity";
import { ProjetoService } from "./service/projeto.service";
import { ProjetoController } from "./controller/projeto.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Projetos])],
    providers:[ProjetoService] ,
    controllers:[ProjetoController],
    exports:[TypeOrmModule]

})

export class ProjetoModule { }