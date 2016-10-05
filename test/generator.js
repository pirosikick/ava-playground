import test from 'ava';

test(function* (t) {
  // Promise
  const message = yield Promise.resolve('Hello, Generator!');
  t.is(message, 'Hello, Generator!');
});

function* generatorFun() {
  // 実際はファイル操作やAPIリクエストなど
  const a = yield Promise.resolve('a');
  const b = yield Promise.resolve('b');
  return `${a}:${b}`;
}

test(function* (t) {
  const message = yield generatorFun();
  t.is(message, 'a:b');
});
