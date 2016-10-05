import test from 'ava';
// npm i rx@5.0.0-bata12
// ECMAScript Observableの実装
// https://github.com/tc39/proposal-observable
import { Observable } from 'rxjs';

// test.cbは必要なし
test(t => {
  t.plan(3);
  return Observable.of(1, 2, 3, 4, 5, 6)
    .filter(n => (n % 2 === 0)) // 2の倍数
    .map(() => t.pass());
});
