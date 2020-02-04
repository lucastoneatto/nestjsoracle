import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProvinciasModule } from './provincia/provincias.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProvinciasModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {

  constructor(private readonly connection: Connection) {

  }
}
