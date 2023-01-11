import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Grupos } from "../../grupo/entities/grupo.entity";

@Entity({ name: "tb_projetos" })
export class Projetos {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(30)
    @Column({ length: 30, nullable: false })
    @ApiProperty()
    nomeProjeto: string

    @MaxLength(6000)
    @Column({ length: 6000, nullable: true })
    @ApiProperty()
    logoProjeto: string

    @MaxLength(6000)
    @Column({ length: 6000, nullable: true })
    @ApiProperty()
    linkProjeto: string

    @MaxLength(1000)
    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    pitProjeto: string

    @ApiProperty({ type: () => Grupos})
    @ManyToOne (() => Grupos, (grupo) => grupo.projetos, {
        onDelete: "CASCADE"
    })
    grupos: Grupos

}