/* eslint-disable prettier/prettier */
export class UpdateCourseDto {
    readonly name?: string;
    readonly description?: string;
    readonly tags?: string[];
}
// Em uma edição o usuário nem sempre quer atulalizar tudo, por isso as propiedades tem que ir como opcionais
// Somente para leitura, não para manipulação


