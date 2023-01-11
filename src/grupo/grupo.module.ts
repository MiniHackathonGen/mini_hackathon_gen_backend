import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Grupos } from "./entities/grupo.entity";
import { GrupoService } from "./service/grupo.service";
import { GrupoController } from "./controller/grupo.controller";



@Module({
    imports: [TypeOrmModule.forFeature([Grupos])],
    providers:[GrupoService] ,
    controllers:[GrupoController],
    exports:[TypeOrmModule]

})

export class GrupoModule { }