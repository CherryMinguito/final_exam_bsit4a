const Router = require('koa-router');
const {GetUsers, insertAccount, updateAccount, deleteAccount} = require('./mongo/MongoData');

const router = new Router({
    prefix: "/questions"
});

router.get('/', async (ctx, next) => {
    ctx.body = await GetUsers();
    console.log(ctx.body);
})
//Insert New Document
router.post('/insert', async (ctx, next) =>{
    console.log("Router Data : " + ctx.request.body);
    if(!ctx.request.body.id || !ctx.request.body.question || !ctx.request.body.choice_1 || !ctx.request.body.choice_2 || !ctx.request.body.choice_3 || !ctx.request.body.answer )
    {
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else
    {
        var res = await insertAccount(ctx.request.body.id, ctx.request.body.question, ctx.request.body.choice_1, ctx.request.body.choice_2, ctx.request.body.choice_3, ctx.request.body.answer);
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
    if(!ctx.request.body.id || !ctx.request.body.question || !ctx.request.body.choice_1 || !ctx.request.body.choice_2 || !ctx.request.body.choice_3 || !ctx.request.body.answer)
    {
        console.log("Missing Fields");
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else
    {
        var res = await updateAccount(ctx.request.body.id, ctx.request.body.question, ctx.request.body.choice_1, ctx.request.body.choice_2, ctx.request.body.choice_3, ctx.request.body.answer);
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
router.post('/delete', async (ctx, next) =>{
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
    }
    else
    {
        console.log(ctx.request.body.id);
        var res = await deleteAccount(ctx.request.body.id);
        if(res)
        {
            ctx.response.status = 201;
            ctx.body = "Account Deleted";
            console.log("Account Deleted");
        }
    }
    next();
})

module.exports = router;
