const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const patients = await connection('patients').select('*');

    return res.json(patients);
  },
  async create(req, res, next) {
    try {
      const {
        id,
        name,
        age,
        city,
        bloodType,
        weight,
        height,
        problem,
        historic,
      } = req.body;

      await connection('patients').insert({
        id,
        name,
        age,
        city,
        bloodType,
        weight,
        height,
        problem,
        historic,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, age, city, weight, height } = req.body;

      await connection('patients')
        .update({
          name,
          age,
          city,
          weight,
          height,
        })
        .where({
          id,
        });

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const {
        name,
        age,
        city,
        bloodType,
        weight,
        height,
        problem,
        historic,
      } = req.body;

      const data = await connection('patients')
        .select(name, age, city, bloodType, weight, height, problem, historic)
        .where({
          id,
        })
        .first();

      return res.json(data);
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await connection('patients')
        .where({
          id,
        })
        .del();

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
