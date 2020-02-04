import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProvinciaService } from './provincias.service';
import { Provincia } from '../provincia.entity';
import { ApiTags, ApiParam, ApiOperation } from '@nestjs/swagger';

@ApiTags('Provincias')
@Controller('provincias')
export class ProvinciasController {

    constructor(private readonly provinciaService: ProvinciaService) {}

  @ApiOperation({ summary: 'Retorn listado de provincias'})
  @Get()
  async findAll(): Promise<Provincia[]> {
    return this.provinciaService.findAll();
  }

  @ApiOperation({ summary: 'Retorn una provincia buscada por id'})
  @ApiParam({ name: 'id' })
  @Get(':id')
  findOne(@Param('id') id: number): any {
    return this.provinciaService.findOne(id);
  }

  @Post()
  async create(): Promise<boolean> {
    return this.provinciaService.createProvincia();
  }

}
