/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";// tem uma série de opções de validações

export class CreateCourseDto {
     @IsString()
     readonly name: string;

     @IsString()
     readonly description: string;

     @IsString({each: true}) // cada elemento do array tem que ser string
     readonly tags: string[];
}
// Somente para leitura, não para manipulação
// @ são validadors