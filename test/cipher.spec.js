describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33'  , () => {
      let result = cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      assert.equal(result, "HIJKLMNOPQRSTUVWXYZABCDEFG");
    }  );

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33'  , () => {
      let result = cipher.encode(33, "abcdefghijklmnopqrstuvwxyz");
      assert.equal(result, "hijklmnopqrstuvwxyzabcdefg");
    }  );

    it('debería retornar "ñ*$# %" para "ñ*$# %" con offest 33', () => {
      let result = cipher.encode(33, "ñ*$# %");
      assert.equal(result, "ñ*$# %");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      let result = cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG");
      assert.equal(result, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      let result = cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg");
      assert.equal(result, "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "ñ*$# %" para "ñ*$# %" con offest 33', () => {
      let result = cipher.decode(33, "ñ*$# %");
      assert.equal(result, "ñ*$# %");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33), 'object');
    });

    it('el objeto debería tener una propiedad encode', ()=>{
      assert.property(cipher.createCipherWithOffset(33), 'encode');
    });

    it('el objeto debería tener una propiedad decode', ()=>{
      assert.property(cipher.createCipherWithOffset(33), 'decode');
    });

    describe('cipher.createCipherWithOffset().encode', () => {
      it('debería ser una función', () => {
        assert.equal(typeof cipher.createCipherWithOffset().encode, 'function')
      });

      it('debería retornar "haféqwulfd" para cipher.createCipherWithOffset(33).encode("excéntrica")', () => {
        let result = cipher.createCipherWithOffset(3).encode("excéntrica");
        assert.equal(result, "haféqwulfd");
        });
    });
    
    describe('cipher.createCipherWithOffset().decode', () => {
      it('debería ser una función', () => {
        assert.equal(typeof cipher.createCipherWithOffset().decode, 'function')
      });

      it('debería retornar "haféqwulfd" para cipher.createCipherWithOffset(33).decode("excéntrica")', () => {
        let result = cipher.createCipherWithOffset(3).decode("haféqwulfd");
        assert.equal(result, "excéntrica");
        });
    });

  });

});
