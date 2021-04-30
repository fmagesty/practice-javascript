function testPalavra(letras) {
  contador = "";
  for (let i = 0; i < letras.length; i++) {
    contador += letras[i];
    console.log(contador);
  }
}

testPalavra("aabbcc");
