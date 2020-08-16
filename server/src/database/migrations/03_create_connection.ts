import knex from 'knex';

/**
 * Criação da tabela;
 * @param knex 
 */
export async function up(knex: knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        
        table.integer('user_id')
            .nullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable();
    });
}

/**
 * Deleção da tabela (Desfazer todas as auterações);
 * @param knex 
 */
export async function down(knex: knex) {
    return knex.schema.dropTable('connections');
}