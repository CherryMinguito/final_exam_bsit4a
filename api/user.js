const Router = require('koa-router');
const {GetAllStudent, InsertStudent, UpdateStudent, DeleteStudent} = require('./mongo/MongoData');

const router = new Router({
    prefix: '/users'
});

//Get All Documens from Account Collection
router.get('/', async (ctx, next) => {
    ctx.body = await GetAllStudent();
    console.log("Get All Student Data")
    next();
});

//Insert New Document
router.post('/insert', async (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.name || !ctx.request.body.course || !ctx.request.body.year || !ctx.request.body.section)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var res =  await InsertStudent(ctx.request.body.id, ctx.request.body.name, ctx.request.body.course, ctx.request.body.year, ctx.request.body.section);
        if(res)
        {
            ctx.response.status = 200;
            ctx.body = "Successfully Inserted Student Data to Record";
            console.log("Successfully Inserted Student Data to Record");
        }
    }
    next();
})

//Update Document
router.post('/update', async (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.name || !ctx.request.body.course || !ctx.request.body.year || !ctx.request.body.section)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var res = await UpdateStudent(ctx.request.body.id,
            ctx.request.body.name,
            ctx.request.body.course,
            ctx.request.body.year,
            ctx.request.body.section
        );
        if(res)
        {
            ctx.response.status = 200;
            ctx.body = "Successfully Updated Student Data On Record";
            console.log("Successfully Updated Student Data On Record");
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
        console.log("Missing Fields");
    }
    else
    {
        var res = await DeleteStudent(ctx.request.body.id);
        if(res)
        {
            ctx.response.status = 200;
            ctx.body = "Successfully Deleted Student Data From Record";
            console.log("Successfully Deleted Student Data From Record");
        }
    }
});

module.exports = router;
