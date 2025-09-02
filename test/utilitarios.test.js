const Utilitarios = require("../src/utilitarios");
const utils = new Utilitarios();

describe('Utilitarios - Testes de Strings', () => {
  test('inverterString', () => {
    expect(utils.inverterString("abc")).toBe("cba");
  });

  test('contarCaracteres', () => {
    expect(utils.contarCaracteres("abc")).toBe(3);
  });

  test('paraMaiusculas', () => {
    expect(utils.paraMaiusculas("abc")).toBe("ABC");
  });

  test('paraMinusculas', () => {
    expect(utils.paraMinusculas("ABC")).toBe("abc");
  });

  test('primeiraLetraMaiuscula', () => {
    expect(utils.primeiraLetraMaiuscula("teste")).toBe("Teste");
  });

  test('primeiraLetraMaiuscula - string vazia', () => {
    expect(utils.primeiraLetraMaiuscula("")).toBe("");
  });

  test('removerEspacos', () => {
    expect(utils.removerEspacos("  oi  ")).toBe("oi");
  });

  test('repetirTexto', () => {
    expect(utils.repetirTexto("abc", 3)).toBe("abcabcabc");
  });

  test('contarPalavras', () => {
    expect(utils.contarPalavras("Olá mundo teste")).toBe(3);
  });

  test('ehPalindromo', () => {
    expect(utils.ehPalindromo("Ame a ema")).toBe(true);
    expect(utils.ehPalindromo("teste")).toBe(false);
  });
});

describe('Utilitarios - Testes de Números', () => {
  test('somar', () => {
    expect(utils.somar(2, 3)).toBe(5);
  });

  test('subtrair', () => {
    expect(utils.subtrair(5, 2)).toBe(3);
  });

  test('multiplicar', () => {
    expect(utils.multiplicar(2, 3)).toBe(6);
  });

  test('dividir', () => {
    expect(utils.dividir(6, 2)).toBe(3);
  });

  test('dividir por zero', () => {
    expect(() => utils.dividir(5, 0)).toThrow("Divisão por zero");
  });

  test('ehPar', () => {
    expect(utils.ehPar(4)).toBe(true);
    expect(utils.ehPar(5)).toBe(false);
  });

  test('ehNumero', () => {
    expect(utils.ehNumero(123)).toBe(true);
    expect(utils.ehNumero("123")).toBe(false);
    expect(utils.ehNumero(NaN)).toBe(false);
  });

  test('ehNumero - casos extras', () => {
    expect(utils.ehNumero(undefined)).toBe(false);
    expect(utils.ehNumero(null)).toBe(false);
    expect(utils.ehNumero(true)).toBe(false);
    expect(utils.ehNumero({})).toBe(false);
    expect(utils.ehNumero([])).toBe(false);
    expect(utils.ehNumero(Infinity)).toBe(true);
    expect(utils.ehNumero(-Infinity)).toBe(true);
  });

  test('gerarNumeroAleatorio', () => {
    const num = utils.gerarNumeroAleatorio(10);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(10);
  });
});

describe('Utilitarios - Testes de Arrays', () => {
  const array = [3, 1, 2, 2, 5];

  test('primeiroElemento', () => {
    expect(utils.primeiroElemento(array)).toBe(3);
  });

  test('ultimoElemento', () => {
    expect(utils.ultimoElemento(array)).toBe(5);
  });

  test('tamanhoArray', () => {
    expect(utils.tamanhoArray(array)).toBe(5);
  });

  test('ordenarArray', () => {
    expect(utils.ordenarArray(array)).toEqual([1, 2, 2, 3, 5]);
  });

  test('inverterArray', () => {
    expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('juntarArray', () => {
    expect(utils.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
  });

  test('mediaArray', () => {
    expect(utils.mediaArray([1, 2, 3])).toBe(2);
    expect(utils.mediaArray([])).toBe(0);
  });

  test('removerDuplicados', () => {
    expect(utils.removerDuplicados(array)).toEqual([3, 1, 2, 5]);
  });
});

describe('Utilitarios - Testes de Objetos', () => {
  test('mesclarObjetos', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });
});
