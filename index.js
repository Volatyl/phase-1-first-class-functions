function receivesAFunction(spy) {
  spy();
}
function spy() {}

function returnsANamedFunction() {
  function sum() {}
  return sum;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
