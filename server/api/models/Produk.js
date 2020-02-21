/**
 * Produk.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nama: {
      type: 'string',
      columnType: 'varchar(50)',
    },
    deskripsi: {
      type: 'string',
      columnType: 'text',
    },
    harga: {
      type: 'number'
    },


    kategori: {
      model: 'kategori'
    }

  },

};
