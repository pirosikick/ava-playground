import test from 'ava';

// 想定しているデータ
const records = [
  { id: 2, message: 'two' },
  { id: 1, message: 'one' },
  { id: 3, message: 'three' },
];

test(t => {
  for (const record of records) {
    if (record.id === 1) t.is(record.message, 'one');
    if (record.id === 2) t.is(record.message, 'two');
    if (record.id === 3) t.is(record.message, 'three');
  }
});

// const maybeThrowError = () =>
//   Promise.reject(new Error('Hello, error!!'));
// 
// test(t => {
//   return maybeThrowError().catch(err => {
//     t.is(err.message, 'Hello, error!!');
//   });
// });
// 
// // 意図せずPromiseがfullfillしてる
// const maybeThrowError = () =>
//   Promise.resolve('Invalid fullfilled');
//   // Promise.reject(new Error('Hello, error!!'));
// 
// test(t => {
//   return maybeThrowError().catch(err => {
//     // そもそもここに入らないのでパスしちゃう...orz
//     t.is(err.message, 'Hello, error!!');
//   });
// });
// 
// const maybeThrowError = () =>
//   Promise.resolve('Invalid fullfilled');
//   // Promise.reject(new Error('Hello, error!!'));

const maybeThrowError = () =>
  Promise.reject(new Error('Hello, error!!'));

test(t => {
  // 複雑なかんじ
  return maybeThrowError()
    .then(() => t.fail())
    .catch(err => {
      t.is(err.message, 'Hello, error!!');
    });
});


test(t => {
  t.plan(1);
  return maybeThrowError().catch(err => {
    // ここを通らないと、
    // assertionの回数が合わないので落ちる
    t.is(err.message, 'Hello, error!!');
  });
});
