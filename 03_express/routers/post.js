// @ts-check

const express = require('express');

const router = express.Router();

const POST = [
  {
    title: '제목1',
    content: '콘텐츠1',
  },
  {
    title: '제목2',
    content: '콘텐츠2',
  },
];

router.get('/', (req, res) => {
  res.render('post', { POST, postCounts: POST.length });
});

router.get('/id/:id', (req, res) => {
  const formData = POST.find((form) => form.title === req.params.title);
  if (formData) {
    res.send(formData);
  } else {
    const err = new Error('해당 title이 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

router.post('/add', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.content) {
      const newpost = {
        title: req.query.title,
        content: req.query.content,
      };
      POST.push(newpost);
      res.redirect('/posts');
    } else {
      const err = new Error('해당 Form 데이터 내용을 확인하세요!');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력 되지 않았습니다!');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
