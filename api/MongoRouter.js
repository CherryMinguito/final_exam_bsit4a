const Router = require('koa-router');
const {getAllQuestions, getQuestions, updateQuestions, insertQuestions, deleteQuestions} = require('./Mongo/MongoDatabase');

const router = new Router({
    prefix: '/question'
});

//Get All Documens from Account Collection
router.get('/', async (ctx, next) => {
    ctx.body = await getAllQuestions();
    next();
})

//Search Document by ID
router.get('/:id', async (ctx, next) =>{
    
    var res = await getQuestions(ctx.params.id);
    if(res != null)
    {
        ctx.response.status = 201;
        ctx.body = res;
        console.log("Get Question by ID");
    }
    else{
        ctx.response.status = 404;
        ctx.body = "Question not found";
    }
    next();
});

//Insert New Document
router.post('/new', async (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.Question || !ctx.request.body.ChoiceA || !ctx.request.body.ChoiceB || !ctx.request.body.Answer)
    {
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else
    {
        
        console.log("Not Error");
        var res = await insertQuestions(ctx.request.body.id, ctx.request.body.Question, ctx.request.body.ChoiceA, ctx.request.body.ChoiceB, ctx.request.body.Answer);
        if(res)
        {
            console.log("Success Insert");
            ctx.body = "Successfully Added Account";
            ctx.response.status = 201;
        }
    }
    next();
});


//Update Document
router.post('/update', async (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.Question || !ctx.request.body.ChoiceA || !ctx.request.body.ChoiceB || !ctx.request.body.Answer)
    {
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else
    {
        var res = await updateQuestions(ctx.request.body.id, ctx.request.body.Question, ctx.request.body.ChoiceA, ctx.request.body.ChoiceB, ctx.request.body.Answer);
        if(res)
        {
            ctx.response.status = 201;
            ctx.body = "Successful Update";
            console.log("Success Update");
        }
    }
    next();
});


//Delete a Document
router.post('/delete', async (ctx, next) => {
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
    }
    else
    {
        var res = await deleteQuestions(ctx.request.body.id);
        if(res)
        {
            ctx.response.status = 201;
            ctx.body = "Account Deleted";
            console.log("Account Deleted");
        }
    }
    next();
});


module.exports = router;