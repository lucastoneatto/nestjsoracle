import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Provincia } from '../provincia.entity';
import { Repository, Connection, getManager } from 'typeorm';
import { log } from 'console';

@Injectable()
export class ProvinciaService {

    constructor( @InjectRepository(Provincia) private readonly provinciaRepository: Repository<Provincia>) {}

    async findAll(): Promise<Provincia[]> {
        const provincia = new Provincia();
        provincia.nombre = 'dsds';
        return this.provinciaRepository.find();
      }

    async findOne(id: number): Promise<Provincia> {
          return this.provinciaRepository.findOne(id);
      }

    async createProvincia(): Promise<boolean> {

        const pId = 3;
        const manager = getManager();
        const data = await manager.query('select f_prueba_provincia(:p_id) AS "resultado" from dual', [pId]);
        log(data[0].resultado);

        return data[0].resultado;
    }
}
