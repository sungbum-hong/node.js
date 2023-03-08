const promise = new Promise(function (resolve, reject) {
  const sb = 'old';

  if (sb === 'old') {
    setTimeout(function () {
      resolve('sb is old');
    }, 3000);
  } else {
    reject('sb is getting old');
  }
});

promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
