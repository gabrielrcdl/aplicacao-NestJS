/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class CourseRefatoring1661026856470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "courses" RENAME COLUMN "name" TO "course"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "courses" RENAME COLUMN "course" TO "name"`,
        )
    }

}
