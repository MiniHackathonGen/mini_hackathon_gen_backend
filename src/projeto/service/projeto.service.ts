import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Projetos } from "../entities/projeto.entity";

@Injectable()
export class ProjetoService {
    constructor(
        @InjectRepository(Projetos)
        private projetosRepository: Repository<Projetos>
    ) { }

    //Consultar toda as linhas da tabela
    async findAll(): Promise<Projetos[]> {
        return await this.projetosRepository.find({
            relations: {
                grupos: true,
            },
        })
    }

    //Cosultar ID da tabela
    async findById(id: number): Promise<Projetos> {
        let Projetos = await this.projetosRepository.findOne({
            where: {
                id
            }, relations: {
                grupos: true
            }

        })
        if (!Projetos)
            throw new HttpException('Projeto não existe', HttpStatus.NOT_FOUND)

        return Projetos
    }


    //Criar linha
    async create(Projetos: Projetos): Promise<Projetos> {
        return this.projetosRepository.save(Projetos)
    }

    //atualizar linha 
    async update(Projetos: Projetos): Promise<Projetos> {
        let buscarProjetos = await this.findById(Projetos.id)

        if (!buscarProjetos || !Projetos.id)
            throw new HttpException('Projeto Não Existe', HttpStatus.NOT_FOUND)

        return await this.projetosRepository.save(Projetos)
    }

    //Deletar linha 
    async delete(id: number): Promise<DeleteResult> {
        let buscarProjeto = await this.findById(id)

        if (!buscarProjeto)
            throw new HttpException('projeto não encontrada', HttpStatus.NOT_FOUND)

        return await this.projetosRepository.delete(id)
    }
}