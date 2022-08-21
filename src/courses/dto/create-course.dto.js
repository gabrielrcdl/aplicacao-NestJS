"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCourseDto = void 0;
/* eslint-disable prettier/prettier */
var class_validator_1 = require("class-validator"); // tem uma série de opções de validações
var CreateCourseDto = /** @class */ (function () {
    function CreateCourseDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateCourseDto.prototype, "name");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateCourseDto.prototype, "description");
    __decorate([
        (0, class_validator_1.IsString)({ each: true }) // cada elemento do array tem que ser string
    ], CreateCourseDto.prototype, "tags");
    return CreateCourseDto;
}());
exports.CreateCourseDto = CreateCourseDto;
// Somente para leitura, não para manipulação
// @ são validadors
