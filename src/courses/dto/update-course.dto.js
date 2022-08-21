"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdateCourseDto = void 0;
/* eslint-disable prettier/prettier */
var mapped_types_1 = require("@nestjs/mapped-types");
var create_course_dto_1 = require("./create-course.dto");
/* eslint-disable prettier/prettier */
var UpdateCourseDto = /** @class */ (function (_super) {
    __extends(UpdateCourseDto, _super);
    function UpdateCourseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateCourseDto;
}((0, mapped_types_1.PartialType)(create_course_dto_1.CreateCourseDto)));
exports.UpdateCourseDto = UpdateCourseDto;
// Em uma edição o usuário nem sempre quer atulalizar tudo, por isso as propiedades tem que ir como opcionais
// Somente para leitura, não para manipulação
