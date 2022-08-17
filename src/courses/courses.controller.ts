/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';



@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesService.remove(id);
  }
}


// Lógica aplicada sem o uso de um service

// @Get()// 
//     findAll(@Res() response){
//         return response.status(200).send('Listagem de cursos');
//     }

//     @Get(':id')
//     findOne(@Param('id') id: string){
//         return `Curso # ${id}`;
//     }

//     @Post()
//     @HttpCode(HttpStatus.NO_CONTENT)
//     create(@Body() body){
//         return body
//     }

//     @Patch(':id')
//     update(@Param('id') id: string, @Body() body){
//        return `Atualização do curso #${id}`;
//     }

//     @Delete(':id')
//     remove(@Param('id') id: string){
//         return ` Exclusão do Curso # ${id}`;
//     }
