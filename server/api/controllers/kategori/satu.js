module.exports = {
  friendlyName: 'Satu saja',
  description: 'tampilkan kategori terpilih',
  inputs: {
    kategoriId: {
      description: 'id kategori yang dicari',
      type: 'number',
      required: true // input wajib
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

  fn: async function (inputs) {
    // All done.
    let kategori = await Kategori.findOne({ id: inputs.kategoriId });
    if (!kategori) throw { aneh: 'kok aneh tidak ketemu, hayooo' };
    return {
      message: 'sukses',
      data: kategori
    };
  }

};
