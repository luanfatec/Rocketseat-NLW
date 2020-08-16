import knex from 'knex';

/**
 * Criação da tabela;
 * @param knex 
 */
export async function up(knex: knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

/**
 * Deleção da tabela (Desfazer todas as auterações);
 * @param knex 
 */
export async function down(knex: knex) {
    return knex.schema.dropTable('users');
}