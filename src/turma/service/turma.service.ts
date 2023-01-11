import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Turmas } from "../entities/Turma.entity";

@Injectable()
export class TurmaService {
    constructor(
        @InjectRepository(Turmas)
        private TurmasRepository: Repository<Turmas>
    ) { }

    //Consultar toda as linhas da tabela
    async findAll(): Promise<Turmas[]> {
        return await this.TurmasRepository.find({
            relations: {
                grupos: true,
            },

        })
    }

    //Cosultar ID da tabela
    async findById(id: number): Promise<Turmas> {
        let Turmas = await this.TurmasRepository.findOne({
            where: {
                id
            }, relations: {
                grupos: true,
            },

        })
        if (!Turmas)
            throw new HttpException('Turma não existe', HttpStatus.NOT_FOUND)

        return Turmas
    }


    //Criar linha
    async create(Turmas: Turmas): Promise<Turmas> {
        return this.TurmasRepository.save(Turmas)
    }

    //atualizar linha 
    async update(Turmas: Turmas): Promise<Turmas> {
        let buscarTurmas = await this.findById(Turmas.id)

        if (!buscarTurmas || !Turmas.id)
            throw new HttpException('Turma Não Existe', HttpStatus.NOT_FOUND)

        return await this.TurmasRepository.save(Turmas)
    }

    //Deletar linha 
    async delete(id: number): Promise<DeleteResult> {
        let buscarProjeto = await this.findById(id)

        if (!buscarProjeto)
            throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND)

        return await this.TurmasRepository.delete(id)
    }
}