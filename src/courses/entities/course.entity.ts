/* eslint-disable prettier/prettier */
// No final esssa classe vira uma tabela de banco de dados
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  // Um tipo informando com qual entity vou me relacionar, segundo parametro na outra entity qual paramentro vou criar
  @ManyToMany(() => Tag, (tag: Tag) => tag.courses, { cascade: true })
  tags: Tag[];
}
