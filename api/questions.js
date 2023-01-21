const Router = require('koa-router');

const router = new Router({
    prefix: "/questions"
});
let id = 100;
let question = [
    {id: id++, text: "Irish Pearl Sumicad", answer: "BSIT", choices: "4",edit: false},
];

//all students data
router.get(('/'), (ctx, next) => {
    ctx.body = student;
    console.log("Get All Questions Data");
    next();
});

router.post('/insert', (ctx, next) => {
    if(!ctx.request.body.text || !ctx.request.body.answer || !ctx.request.body.choices)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        student.push({id: id++, text: ctx.request.body.text, answer: ctx.request.body.answer, choices: ctx.request.body.choices, edit: false});
        ctx.response.status = 200;
        ctx.body = "Successfully Inserted Question Data to Record";
        console.log("Successfully Inserted Question Data to Record");
    }
    next();
});

router.post('/delete', (ctx, next) => {
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var index = student.findIndex(x => x.id == ctx.request.body.id);
        student.splice(index, 1);
        ctx.response.status = 200;
        ctx.body = "Successfully Deleted Question Data From Record";
        console.log("Successfully Deleted Question Data From Record");
    }
    next();
});

router.post('/update', (ctx, next) => {
    if(!ctx.request.body.id || !ctx.request.body.text || !ctx.request.body.answer || !ctx.request.body.choices)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var index = student.findIndex(x => x.id == ctx.request.body.id);
        question[index].text = ctx.request.body.text;
        question[index].answer = ctx.request.body.answer;
        question[index].chocies = ctx.request.body.choices;
        ctx.response.status = 200;
        ctx.body = "Successfully Updated Question Data On Record";
        console.log("Successfully Updated Question Data On Record");
    }
})

module.exports = router;