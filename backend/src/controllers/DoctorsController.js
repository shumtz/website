const bcrypt = require('bcrypt');
const connection = require('../database/connection');
const generateId = require('../util/generateId');

module.exports = {
  async index(req, res) {
    const doctors = await connection('doctors').select('*');

    return res.json(doctors);
  },
  async create(req, res, next) {
    try {
      const {
        name,
        email,
        password,
        uf,
        municipality,
        crm,
        subscriptionType,
        speciality,
        situation,
        actuationArea,
      } = req.body;

      const id = generateId();
      const passwordHash = await bcrypt.hash(password, 8);

      await connection('doctors').insert({
        id,
        name,
        email,
        password: passwordHash,
        uf,
        municipality,
        crm,
        subscriptionType,
        speciality,
        situation,
        actuationArea,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const {
        name,
        municipality,
        email,
        password,
        situation,
        subscriptionType,
      } = req.body;

      const passwordHash = await bcrypt.hash(password, 8);

      await connection('doctors')
        .update({
          name,
          email,
          password: passwordHash,
          municipality,
          situation,
          subscriptionType,
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
        uf,
        email,
        password,
        municipality,
        crm,
        subscriptionType,
        speciality,
        situation,
        actuationArea,
      } = req.body;

      const data = await connection('doctors')
        .select(
          name,
          uf,
          email,
          password,
          municipality,
          crm,
          subscriptionType,
          speciality,
          situation,
          actuationArea
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

      await connection('doctors')
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
