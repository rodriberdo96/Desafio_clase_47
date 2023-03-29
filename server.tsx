import { Application, Router } from './deps.ts'
import Page from './pages.tsx'


const router = new Router()
const app = new Application();

const colorList:Array<string> = []



router.get('/', ctx => {
    ctx.response.type = ".html"
    ctx.response.body = Page(colorList)
});


router.post('/', async ctx => {
    const body = await ctx.request.body({
        contentTypes: {
            json: ['application/json'],
            form: [ 'multipart', 'urlencoded'],
            text: ['text']
        }
    }).value;
    
    const color = body.toString().slice(10)
    colorList.push(color)
    ctx.response.redirect('/')

} )


app.use(router.routes())
app.use(router.allowedMethods())
app.use(ctx =>{
    ctx.response.status = 404;
    ctx.response.body = "NO TA"
});

await app.listen({port: 9999})