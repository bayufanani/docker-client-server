module.exports = {
  friendlyName: 'Satu saja',
  description: 'tampilkan kategori terpilih',
  inputs: {
    id: {
      description: 'id kategori yang dicari',
      type: 'number',
    }
  },

  exits: {
    success: {
      responseType: 'ok',
    },
    aneh: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'aneh' // gawean dwe.
    }
  },

  fn: async function () {
    // All done.
    let kategori = await Kategori.findOne({ id: this.req.params.id });
    if (!kategori) throw { aneh: 'kok aneh tidak ketemu, hayooo' };
    return {
      message: 'sukses',
      data: kategori
    };
  }

};
