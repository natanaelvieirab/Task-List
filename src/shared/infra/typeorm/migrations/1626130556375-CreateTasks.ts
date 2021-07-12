import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTasks1626130556375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "done",
                        type: "boolean"
                    },
                    {
                        name: "id_user",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp"
                    },

                ]
            }))

        await queryRunner.createForeignKey(
            "tasks",
            new TableForeignKey({
                name: "FKUser",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["id_user"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("tasks", "FKUser")
        await queryRunner.dropTable("tasks")
    }

}
