import test from 'ava';

const promiseFun = () => Promise.resolve('Hello!');

test(async t => {
  const message = await promiseFun();
  t.is(message, 'Hello!');
});
