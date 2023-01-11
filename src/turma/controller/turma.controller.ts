import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Turmas } from "../entities/turma.entity";
import { TurmaService } from "../service/turma.service";



@ApiTags('Turmas')
@Controller("/turmas")
export class TurmaController{
    constructor(private readonly TurmasService: TurmaService){}


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Turmas[]>{
        return this.TurmasService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id:number): Promise<Turmas>{
        return this.TurmasService.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() turmas:Turmas): Promise<Turmas>{
        return this.TurmasService.create(turmas)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() turmas: Turmas): Promise<Turmas>{
        return this.TurmasService.update(turmas)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.TurmasService.delete(id)
    }

 

}