const connection = require('../database/connection');

module.exports = {
  async all(req, res) {
    const patients = await connection('patients').select('*');

    return res.json(patients);
  },
};
