import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Grupos } from "../../grupo/entities/grupo.entity";

@Entity({ name: "tb_turmas" })
export class Turmas {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    descricao: string

    @ApiProperty()
    @Column({default: true })
    isAtivo: boolean

    @ApiProperty({ type: () => Grupos })
        @OneToMany(() => Grupos, (Grupos) => Grupos.turmas)
        grupos: Grupos[]
}