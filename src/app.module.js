"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var courses_module_1 = require("./courses/courses.module");
var typeorm_1 = require("@nestjs/typeorm");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                courses_module_1.CoursesModule,
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: 'root',
                    database: 'postgres',
                    entities: [__dirname + '/**/*.entity.js'],
                    autoLoadEntities: false,
                    synchronize: true
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
