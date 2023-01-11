import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Projetos } from "../entities/projeto.entity";
import { ProjetoService } from "../service/projeto.service";




@ApiTags('Projetos')
@Controller("/projetos")
export class ProjetoController{
    constructor(private readonly ProjetoService: ProjetoService){}


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Projetos[]>{
        return this.ProjetoService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id:number): Promise<Projetos>{
        return this.ProjetoService.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() projeto:Projetos): Promise<Projetos>{
        return this.ProjetoService.create(projeto)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() projeto: Projetos): Promise<Projetos>{
        return this.ProjetoService.update(projeto)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.ProjetoService.delete(id)
    }


}