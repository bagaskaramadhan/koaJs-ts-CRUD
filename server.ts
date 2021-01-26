import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
import { createKoaServer, useContainer } from 'routing-controllers'
import Container from 'typedi'
const PORT = 3000

const startServer = () => {
    const server: Koa<DefaultState, DefaultContext> = createKoaServer({
        // controllers: console.log('OKE')
    })
    useContainer(Container)
    server.listen(PORT).on('listening', () => console.log(`SERVER STARTED ON PORT ${PORT}`))
}
startServer()