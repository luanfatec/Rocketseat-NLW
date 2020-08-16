import knex from 'knex';

/**
 * Criação da tabela;
 * @param knex 
 */
export async function up(knex: knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        
        table.integer('class_id')
            .nullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

/**
 * Deleção da tabela (Desfazer todas as auterações);
 * @param knex 
 */
export async function down(knex: knex) {
    return knex.schema.dropTable('class_schedule');
}