/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';



@Controller('courses')
export class CoursesController {


    constructor(private readonly coursesServices: CoursesService,){}


    
  @Get()
    findAll(){
        return this.coursesServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coursesServices.findOne(id);
    }

    @Post()
    // Já sei o que de fato receber no corpo da informação que o usuário está enviando do front para cá
    create(@Body() createCourseDto: CreateCourseDto){
        return this.coursesServices.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto){
       return this.coursesServices.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coursesServices.remove(id);
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
