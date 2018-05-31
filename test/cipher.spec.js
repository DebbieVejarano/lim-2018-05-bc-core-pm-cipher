describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33'  , () => {
      let result = cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33);
      assert.equal(result, 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    }  );
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      let result = cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33);
      assert.equal(result, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    xit('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });

});
