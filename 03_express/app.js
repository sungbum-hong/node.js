// @ts-check

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

const mainRouter = require('./routers'); //routers 만 작성해도 작동
const userRouter = require('./routers/users');
const postRouter = require('./routers/post');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log(__dirname);

// http://localhost:4000
app.use('/', mainRouter);

// http://localhost:4000/users
// http://127.0.0.1:4000/users
app.use('/users', userRouter);
app.use('/post', postRouter);
app.get('/', (req, res) => {
  res.send('Hello, Express World');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `<br> <a href="/">홈으로</a>`);
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
