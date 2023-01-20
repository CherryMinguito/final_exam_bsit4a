const Router = require('koa-router');
const {GetUsers, insertAccount, updateAccount, deleteAccount} = require('./mongo/mongoDatabase');

const router = new Router({
    prefix: "/users"
});

//Read
router.get('/', async (ctx, next) => {
    ctx.body = await GetUsers();
    console.log("Get All Student Data");
    console.log(ctx.body);
})

//Create
router.post('/insert', async (ctx, next) =>{
    console.log("Router Data : " + ctx.request.body);
    if(!ctx.request.body.id || !ctx.request.body.fname || !ctx.request.body.lname || !ctx.request.body.course)
    {
        ctx.response.status = 404;
        ctx.body = "Missing fields";
    }
    else
    {
        var res = await insertAccount(ctx.request.body.id, ctx.request.body.fname, ctx.request.body.lname, ctx.request.body.course);
        if(res)
        {
            ctx.response.status = 201;
            console.log("Student is successfully added");
            ctx.body = "Student is successfully added";
        }
    }
    next();
});

//Update Document
router.post('/update', async (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.fname || !ctx.request.body.lname || !ctx.request.body.course)
    {
        ctx.response.status = 404;
        ctx.body = "Missing fields";
        console.log("Missing Fields");
    }
    else
    {
        var res = await updateAccount(ctx.request.body.id, ctx.request.body.fname, ctx.request.body.lname, ctx.request.body.course);
        if(res)
        {
            ctx.response.status = 201;
            ctx.body = "Student is updated successfully";
            console.log("Student is updated successfully");
        }

    }
    next();
});

//Delete
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
            ctx.body = "Student is deleted successfully";
            console.log("Student is deleted successfully");
        }
    }
    next();
})

module.exports = router;
