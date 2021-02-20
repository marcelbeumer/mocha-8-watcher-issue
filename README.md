# mocha-8-watcher-issue

Demonstrates issue with mocha@8 that crashes watch mode when imports fail (https://github.com/mochajs/mocha/issues/4580).
This is a minimal mocha setup, see `typescript` branch for the same issue with a ts-node setup.

To reproduce:

- `npm i`
- `npm run test -- --watch`
- watcher should run and test passes
- uncomment the `RUNTIME ERROR` part in `test/example.test.js` 
- the watcher should show the error but not crash
- uncomment either the `REQUIRE ERROR` or `EXPLICIT THROW` part in `test/example.test.js` 
- the watcher crashes
- install mocha 7 with `npm i mocha@7`
- `npm run test -- --watch`
- the watcher shows an error but does not crash
