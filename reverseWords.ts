function reverseWords(s: string): string {
  let right = 0;
  let left = 0;
  let palavrasInvertidas = "";
  let fraseArray = s.split("");

  while (right < s.length) {
    if (s[right] != " ") {
      right++;
    } else {

      palavrasInvertidas += fraseArray
        .slice(left, right + 1)
        .reverse()
        .join("");
      right++;
      left = right;
    }
  }
  palavrasInvertidas +=
    " " +
    fraseArray
      .slice(left, right + 1)
      .reverse()
      .join("");

  return palavrasInvertidas.slice(1);
}

reverseWords("Let's take LeetCode contest");
