"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CoursesController = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var CoursesController = /** @class */ (function () {
    function CoursesController(coursesService) {
        this.coursesService = coursesService;
    }
    CoursesController.prototype.findAll = function () {
        return this.coursesService.findAll();
    };
    CoursesController.prototype.findOne = function (id) {
        return this.coursesService.findOne(id);
    };
    CoursesController.prototype.create = function (createCourseDto) {
        return this.coursesService.create(createCourseDto);
    };
    CoursesController.prototype.update = function (id, updateCourseDto) {
        return this.coursesService.update(id, updateCourseDto);
    };
    CoursesController.prototype.remove = function (id) {
        return this.coursesService.remove(id);
    };
    __decorate([
        (0, common_1.Get)()
    ], CoursesController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CoursesController.prototype, "findOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], CoursesController.prototype, "create");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CoursesController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CoursesController.prototype, "remove");
    CoursesController = __decorate([
        (0, common_1.Controller)('courses')
    ], CoursesController);
    return CoursesController;
}());
exports.CoursesController = CoursesController;
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
