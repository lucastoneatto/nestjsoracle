import { Module } from '@nestjs/common';
import { ProvinciasController } from './provincias.controller';
import { ProvinciaService } from './provincias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provincia } from '../provincia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provincia])],
  controllers: [ProvinciasController],
  providers: [ProvinciaService],
})
export class ProvinciasModule {}
