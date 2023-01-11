import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Turmas } from "../../turma/entities/turma.entity";
import { Projetos } from "../../projeto/entities/projeto.entity";

@Entity({ name: "tb_grupos" })
export class Grupos {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(10)
    @Column({ length: 10, nullable: false })
    @ApiProperty()
    numeroGrupo: string

    @MaxLength(700)
    @Column({ length: 700, nullable: true })
    @ApiProperty()
    maisInfo: string

    @ApiProperty({ type: () => Turmas})
    @ManyToOne (() => Turmas, (turmas) => turmas.grupos, {
        onDelete: "CASCADE"
    })
    turmas: Turmas

    @ApiProperty({ type: () => Projetos })
    @OneToMany(() => Projetos, (projeto) => projeto.grupos)
    projetos: Projetos[]

}