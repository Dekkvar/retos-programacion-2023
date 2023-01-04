function hackerLanguage(leet) {
  const equivalence = {
    a: 4,
    b: 'I3',
    c: '[',
    d: ')',
    e: 3,
    f: '|=',
    g: '&',
    h: '#',
    i: 1,
    j: ',_|',
    k: '|<',
    l: '£',
    m: '/\\/\\',
    n: '^/',
    o: 0,
    p: '|*',
    q: '(_,)',
    r: 'I2',
    s: 5,
    t: 7,
    u: '(_)',
    v: '\\/',
    w: '\\/\\/',
    x: '><',
    y: 'j',
    z: 2,
    1: 'L',
    2: 'R',
    3: 'E',
    4: 'A',
    5: 'S',
    6: 'G',
    7: 'T',
    8: 'B',
    9: 'q',
    0: 'O'
  }

  leet = leet.toLowerCase();

  let new1337 = [];

  for (let i = 0; i < leet.length; i++) {
    if (equivalence.hasOwnProperty(leet[i])) {
      new1337 += equivalence[leet[i]];
    } else {
      new1337 += leet[i];
    }
  }

  return new1337;
}