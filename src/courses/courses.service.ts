/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {

    private courses: Course[] = [

    {
        id: 1,
        name: 'Fundamentos do NestJS',
        description: '',
        tags: ['Node.js', "Nest.js", "JavaScript"]
     }
 ];

 findAll(){
    return this.courses
 }

 // Recebe um parâmetro que é um id, terá que procurar em courses o id que foi passado.
 findOne(id: string){
    // faz um find método para buscar itens em um array em JS, onde para cada course que encontrar dentro desse array
    // onde verifico se o id de course, foi extamente ao que foi passado.
    const course =  this.courses.find((course: Course) => course.id === Number(id));
    // se não existir curso
    if(!course){
        throw new HttpException(`Curso ID ${id} not found`, HttpStatus.NOT_FOUND)
    }
    return course
 }


 create(createCourseDto: any){
    this.courses.push(createCourseDto);
 }


 // Tem que encontrar primeiramete o id, para depois jogar os dados neles
 // findeIndex pegar a posição para cada um que passar, vai comparar o course.id com id que recebemos
 update(id: string, updateCourseDto: any){
    const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));
    this.courses[indexCourse] = updateCourseDto;
 }



 remove(id: string){
    const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));

    if(indexCourse >= 0){
        this.courses.splice(indexCourse, 1);
    }
 }
}
