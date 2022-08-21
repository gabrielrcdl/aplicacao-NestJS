/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,

    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  findAll() {
    return this.coursesRepository.find({
      relations: ['tags']
    });
    // find método do typeORM que buusca todos os dados
  }

  // Recebe um parâmetro que é um id, terá que procurar em courses o id que foi passado.
  async findOne(id: number) {
    // Recebe um objeto de opçoes
    const course = await this.coursesRepository.findOne({
      relations: ['tags']
    });

    // se não existir curso
    if (!course) {
      throw new HttpException(`Curso ID ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return course;
  }

  async create(createCourseDto: CreateCourseDto) {
    const tags = await Promise.all(
      createCourseDto.tags.map((name) => this.preloadTagByName(name)),
    );

    const course = this.coursesRepository.create({
      ...createCourseDto,
      tags,
    });
    return this.coursesRepository.save(course);
  }

  // Tem que encontrar primeiramete o id, para depois jogar os dados neles
  // findeIndex pegar a posição para cada um que passar, vai comparar o course.id com id que recebemos
  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const tags =
      updateCourseDto.tags &&
      (await Promise.all(
        updateCourseDto.tags.map((name) => this.preloadTagByName(name)),
      ));

    const course = await this.coursesRepository.preload({
      id: +id, // convertendo o id pra numerico
      ...updateCourseDto,
      tags,
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.coursesRepository.save(course);
  }

  async remove(id: number) {
    const course = await this.coursesRepository.findOne({
      where: { id },
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.coursesRepository.remove(course);
  }

  private async preloadTagByName(name: string): Promise<Tag> {
    const tag = await this.tagsRepository.findOne({ where: { name } });
    if (tag) {
      return tag;
    }
    return this.tagsRepository.create({ name });
  }
}
