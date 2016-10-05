import test from 'ava';

const delayHello = (msec, callback) =>
  setTimeout(() => callback('Hello!'), msec);

// t.endが呼ばれるまでテストを停止しない
test.cb(t => {
  delayHello(1000, message => {
    t.is(message, 'Hello!');
    t.end();
  });
});
