module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'elenails',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './elenails.sqlite'
        }
    }
}