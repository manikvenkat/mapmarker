// module.exports = {
//
//
//   friendlyName: 'Insert',
//
//
//   description: 'Insert map.',
//
//
//   inputs: {
//
//   },
//
//
//   exits: {
//
//   },
//
//
//   fn: async function (inputs, exits) {
//
//     return exits.success();
//
//   }
//
//
// };

/**
 * MapsdataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // inputs: {
  //   lat: {
  //     type: 'string',
  //     required: true,
  //     unique: false,
  //     maxLength: 120,
  //     example: 12.9716
  //   },
  //
  //   lng: {
  //     type: 'string',
  //     required: true,
  //     unique: false,
  //     maxLength: 120,
  //     example: 77.5946
  //   },
  // },
  inputs: {
    lat: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 120,
      example: "12.9716"
    },

    lng: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 120,
      example: "77.5946"
    },
  },
  fn: async function (inputs, exits) {

    console.log("entered here");
    await Mapsdata.create(Object.assign({
      lat: inputs.lat,
      lng: inputs.lng
    }));
    console.log("here also");
    // Since everything went ok, send our 200 response.
    return exits.success();

  }

};
