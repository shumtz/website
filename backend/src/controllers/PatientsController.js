const bcrypt = require('bcrypt');
const connection = require('../database/connection');
const generateId = require('../util/generateId');

module.exports = {
  async index(req, res) {
    const patients = await connection('patients').select('*');

    return res.json(patients);
  },
  async create(req, res, next) {
    try {
      const {
        name,
        age,
        email,
        password,
        city,
        bloodType,
        weight,
        height,
        problem,
        historic,
      } = req.body;
      const passwordHash = await bcrypt.hash(password, 8);

      const id = generateId();

      const data = {
        id,
        name,
        age,
        email,
        password: passwordHash,
        city,
        bloodType,
        weight,
        height,
        problem,
        historic,
      };

      await connection('patients').insert(data);

      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const {
        name,
        age,
        email,
        password,
        city,
        weight,
        height,
        problem,
        historic,
      } = req.body;

      const passwordHash = await bcrypt.hash(password, 8);

      const data = {
        name,
        email,
        password: passwordHash,
        age,
        city,
        weight,
        height,
        problem,
        historic,
      };

      await connection('patients').update(data).where({
        id,
      });
      return res.json(data);
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
        email,
        password,
        bloodType,
        weight,
        height,
        problem,
        historic,
      } = req.body;

      const data = await connection('patients')
        .select(
          name,
          age,
          city,
          email,
          password,
          bloodType,
          weight,
          height,
          problem,
          historic
        )
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
