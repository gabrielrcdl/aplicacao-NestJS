/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./create-course.dto";

/* eslint-disable prettier/prettier */
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
// Em uma edição o usuário nem sempre quer atulalizar tudo, por isso as propiedades tem que ir como opcionais
// Somente para leitura, não para manipulação


