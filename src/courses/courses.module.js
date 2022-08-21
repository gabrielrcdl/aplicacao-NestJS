"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesModule = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var courses_controller_1 = require("./courses.controller");
var courses_service_1 = require("./courses.service");
var course_entity_1 = require("./entities/course.entity");
var tag_entity_1 = require("./entities/tag.entity");
var CoursesModule = /** @class */ (function () {
    function CoursesModule() {
    }
    CoursesModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([course_entity_1.Course, tag_entity_1.Tag])],
            controllers: [courses_controller_1.CoursesController],
            providers: [courses_service_1.CoursesService]
        })
    ], CoursesModule);
    return CoursesModule;
}());
exports.CoursesModule = CoursesModule;
