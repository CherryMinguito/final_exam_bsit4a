const Router = require('@koa/router');
const {storeQuestion, getAllQuestion, getQuestion, updateQuestion, deleteQuestion} = require('../db/question.model');

const router = new Router({
    prefix:'/questions'
})

//localhost:8080/questions GET
router.get('/', async ctx =>{
    ctx.body = await getAllQuestion();
})

//localhost:8080/questions POST
router.post('/', async ctx =>{
    let question = ctx.request.body;
    question = await storeQuestion(question);
    ctx.response.status = 200;
    ctx.body = question;
})

//localhost:8080/questions/{id} GET
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getQuestion(id);
})

//localhost:8080/questions/{id} DELETE
router.delete('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await deleteQuestion(id);
})

//localhost:8080/questions/{id} PUT/PATCH
router.put('/:id', async ctx =>{
    const id = ctx.params.id;
    let question = ctx.request.body;
    question = updateQuestion(id, question);
    ctx.response.status = 200;
    ctx.body = question;
})

module.exports = router;
