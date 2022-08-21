"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Course = void 0;
/* eslint-disable prettier/prettier */
// No final esssa classe vira uma tabela de banco de dados
var typeorm_1 = require("typeorm");
var tag_entity_1 = require("./tag.entity");
var Course = /** @class */ (function () {
    function Course() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Course.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Course.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Course.prototype, "description");
    __decorate([
        (0, typeorm_1.JoinTable)()
        // Um tipo informando com qual entity vou me relacionar, segundo parametro na outra entity qual paramentro vou criar
        ,
        (0, typeorm_1.ManyToMany)(function () { return tag_entity_1.Tag; }, function (tag) { return tag.courses; }, { cascade: true })
    ], Course.prototype, "tags");
    Course = __decorate([
        (0, typeorm_1.Entity)('courses')
    ], Course);
    return Course;
}());
exports.Course = Course;
