const mongoose = require('mongoose');
const { modelsFiles } = require('../../../models/utils');
const createCRUDController = require('../../../controllers/middlewaresControllers/createCRUDController');

const remove = require('./remove');
const update = require('./update');

function modelController() {
  const modelName = 'Company';

  if (!modelsFiles.includes(modelName)) {
    throw new Error(`Model ${modelName} does not exist`);
  } else {
    const Model = mongoose.model(modelName);
    const methods = createCRUDController(modelName);

    methods.delete = (req, res) => remove(Model, req, res);
    methods.update = (req, res) => update(Model, req, res);

    return methods;
  }
}

module.exports = modelController();
