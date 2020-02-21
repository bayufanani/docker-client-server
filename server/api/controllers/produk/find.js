module.exports = {


  friendlyName: 'Find',


  description: 'Find produk.',


  inputs: {
    // input tidak dibutuhkan
  },


  exits: {
    success: {

    },
    notFound: {
      description: 'tidak ada data',
      responseType: 'text',
    }
  },


  fn: async function () {

    let produk = await Produk.find({ 'kategori.nama': 'Meja' }).meta({ enableExperimentalDeepTargets: true });
    return produk;
    /* let query = `
    SELECT p.id, p.nama, k.kategori
    FROM produk p, kategori k
    WHERE p.kategori = k.id
    `

    let hasil = await sails.sendNativeQuery(query);

    return hasil.rows; */

    /* let produk = await Produk.find().populate('kategori');

    if (!produk) {
      throw 'notFound';
    }
    // All done.
    return {
      status: 'sukses',
      data: produk,
    }; */

  }


};
