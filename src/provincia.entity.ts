import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PROVINCIAS')
export class Provincia {

  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ length: 500, name: 'NOMBRE' })
  nombre: string;
}
