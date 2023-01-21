const Router = require('koa-router');
const {getAllQuestions, getQuestions, updateQuestions, insertQuestions, deleteQuestions} = require('./Mongo/MongoDatabase');

const router = new Router({
    prefix: '/question'
});
router.get('/', async (ctx, next) => {
    ctx.body = await getAllQuestions();
    next();
})
router.get('/:id', async (ctx, next) =>{

    var res = await getQuestions(ctx.params.id);
    if(res != null){
    }
    else{
    }
    next();
});
router.post('/new', async (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.Question || !ctx.request.body.ChoiceA || !ctx.request.body.ChoiceB || !ctx.request.body.Answer){
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else{
        console.log("Not Error");
        var res = await insertQuestions(ctx.request.body.id, ctx.request.body.Question, ctx.request.body.ChoiceA, ctx.request.body.ChoiceB, ctx.request.body.Answer);
        if(res){
            console.log("Success Insert");
            ctx.body = "Successfully Added Account";
            ctx.response.status = 201;
        }
    }
    next();
});
router.post('/update', async (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.Question || !ctx.request.body.ChoiceA || !ctx.request.body.ChoiceB || !ctx.request.body.Answer){
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else{
        var res = await updateQuestions(ctx.request.body.id, ctx.request.body.Question, ctx.request.body.ChoiceA, ctx.request.body.ChoiceB, ctx.request.body.Answer);
        if(res){
            ctx.response.status = 201;
            ctx.body = "Successful Update";
            console.log("Success Update");
        }
    }
    next();
});
router.post('/delete', async (ctx, next) => {
    if(!ctx.request.body.id){
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
    }
    else{
        var res = await deleteQuestions(ctx.request.body.id);
        if(res){
            ctx.response.status = 201;
            ctx.body = "Account Deleted";
            console.log("Account Deleted");
        }
    }
    next();
});


module.exports = router;
