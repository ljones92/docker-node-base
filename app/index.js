'use strict'
const base = require('./base')

base.setName('example')

base.config.set({
    // Port to listen on
    HTTP_PORT: { type: 'int', default: 3000 },
    // Name of person to greet
    GREETING_NAME: { type: 'string', default: 'world' }
})

base.metrics.startServer(1337)

const app = require('./app')
app.start()
