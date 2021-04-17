const trace = x => {
    console.log(x);
    return x;
  };
  
  const Identity = value => ({
    map: fn => Identity(fn(value)),
    valueOf: () => value,
  });
  const ints = (Identity(2) + Identity(4));
  trace(ints); // 6
  const hi = (Identity('h') + Identity('i'));
  trace(hi); // "hi"

const f = [1,2,3,4];
f.map(double)
