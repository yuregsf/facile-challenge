import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1638480941967 implements MigrationInterface {
    name = 'Initial1638480941967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "encript" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_59c18b20c439affc4b28e53c440" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "encript"`);
    }

}
