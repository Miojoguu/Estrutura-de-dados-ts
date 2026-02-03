function firstUniqChar(s: string): number {
  let hashMap = new Map<string, number[]>();
  console.log(s.length);

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (hashMap.has(element)) {
      let values = hashMap.get(element);
      hashMap.set(element, [values![0], values![1] + 1]);
    } else {
      hashMap.set(element, [index, 1]);
    }
  }
  for (const [caractere, dados] of hashMap) {
    console.log(
      `O caracter é ${caractere} a sua posicao é ${dados[0]} e a quantidade de vezes que apareceu é ${dados[1]}`,
    );
  }

  return 0;
}

firstUniqChar("aabb");
