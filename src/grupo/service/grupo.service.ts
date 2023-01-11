import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Grupos } from "../entities/grupo.entity";

@Injectable()
export class GrupoService {
    constructor(
        @InjectRepository(Grupos)
        private GruposRepository: Repository<Grupos>
    ) { }

    //Consultar toda as linhas da tabela
    async findAll(): Promise<Grupos[]> {
        return await this.GruposRepository.find({
            relations: {
                turmas: true,
                projetos: true
            },
        })
    }

    //Cosultar ID da tabela
    async findById(id: number): Promise<Grupos> {
        let Grupos = await this.GruposRepository.findOne({
            where: {
                id
            }, relations: {
                turmas: true,
                projetos: true
            },

        })
        if (!Grupos)
            throw new HttpException('Grupo não existe', HttpStatus.NOT_FOUND)

        return Grupos
    }


    //Criar linha
    async create(Grupos: Grupos): Promise<Grupos> {
        return this.GruposRepository.save(Grupos)
    }


    //atualizar linha 
    async update(Grupos: Grupos): Promise<Grupos> {
        let buscarGrupos = await this.findById(Grupos.id)

        if (!buscarGrupos || !Grupos.id)
            throw new HttpException('Grupo Não Existe', HttpStatus.NOT_FOUND)

        return await this.GruposRepository.save(Grupos)
    }

    //Deletar linha 

    async delete(id: number): Promise<DeleteResult> {
        let buscarProjeto = await this.findById(id)

        if (!buscarProjeto)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND)

        return await this.GruposRepository.delete(id)
    }
}