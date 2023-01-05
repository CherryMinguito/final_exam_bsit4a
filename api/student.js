const Router = require('koa-router');

const router = new Router({
    prefix: '/students'
});

let id = 1;

let student = [
    {id: id++, firstName: "Paul Angelo", lastName: "Soltero", edit: false}
];

router.get('/', (ctx, next) => {
    ctx.body = student;
    next();
});

//Add Data
router.post('/create', (ctx, next) => {
    console.log(ctx.request.body);
    if(!ctx.request.body.firstName || !ctx.request.body.lastName)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Field";
        console.log("Missing Field");
    }
    else
    {
        student.push({id: id++, firstName: ctx.request.body.firstName, lastName: ctx.request.body.lastName, edit: false});
        ctx.response.status = 201;
        ctx.body = "Successfully Added Student";
        console.log("Successfully Added Student");
    }
    next();
});

//Delete Data
router.post('/delete', (ctx, next) => {
    console.log(ctx.request.body);
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var index = student.findIndex(x => x.id == ctx.request.body.id);
        console.log(index)
        student.splice(index, 1);
        ctx.response.status = 201;
        ctx.body = "Student Deleted";
        console.log("Student Deleted");
    }
    next();
});


// Update
router.post('/update', (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.firstName || !ctx.request.body.lastName)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        ctx.response.status = 201;
        ctx.body = "Student Deleted";
        var index = student.findIndex(x => x.id == ctx.request.body.id);
        student[index].firstName = ctx.request.body.firstName;
        student[index].lastName =ctx.request.body.lastName;
        console.log("Student Updated");
    }
    next();
});

module.exports = router;
