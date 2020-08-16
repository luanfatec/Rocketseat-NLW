import knex from 'knex';

/**
 * Criação da tabela;
 * @param knex 
 */
export async function up(knex: knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();
        
        table.integer('user_id')
            .nullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

/**
 * Deleção da tabela (Desfazer todas as auterações);
 * @param knex 
 */
export async function down(knex: knex) {
    return knex.schema.dropTable('classes');
}