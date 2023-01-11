import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GrupoService } from "../service/grupo.service";
import { Grupos } from "../entities/grupo.entity";





@ApiTags('Grupos')
@Controller("/Grupos")
export class GrupoController {
    constructor(private readonly GrupoService: GrupoService) { }


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Grupos[]> {
        return this.GrupoService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Grupos> {
        return this.GrupoService.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Grupos: Grupos): Promise<Grupos> {
        return this.GrupoService.create(Grupos)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() grupos: Grupos): Promise<Grupos> {
        return this.GrupoService.update(grupos)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.GrupoService.delete(id)
    }



}