const connection = require('../database/connection');

module.exports = {
  async all(req, res) {
    const doctors = await connection('doctors').select('*');

    return res.json(doctors);
  },
  async create(req, res, next) {
    try {
      const {
        id,
        name,
        uf,
        municipality,
        crm,
        subscriptionType,
        speciality,
        situation,
        actuationArea,
      } = req.body;

      connection('doctors').insert({
        id,
        name,
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
      const { name, municipality, situation, subscriptionType } = req.body;

      await connection('doctors')
        .update({
          name,
          municipality,
          situation,
          subscriptionType        
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
        municipality,
        crm,
        subscriptionType,
        speciality,
        situation,
        actuationArea,
      } = req.body;

      const data = await connection('doctors')
        .select(name, uf, municipality, crm, subscriptionType, speciality, situation, actuationArea)
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
