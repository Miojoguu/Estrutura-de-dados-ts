import { search } from "./binarySearch";

function exponentialSearch(lista: Array<number>, target: number) {
  let right = 1;
  let left = 0;
  while (right < lista.length && lista[right] < target) {
    right = right * 2;
  }
  left = right / 2;
  const listaNova = lista.slice(left, right);
  let resultado = search(listaNova, target);
  if (resultado == -1) {
    console.log("Nao existe esse elemento");
  } else {
    console.log("está na posicao: " + (left + resultado));
  }
}

let lista = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 25, 26, 27, 30, 31, 34, 35, 40, 45, 46, 50, 70, 78, 89,
];

exponentialSearch(lista, 1000);
