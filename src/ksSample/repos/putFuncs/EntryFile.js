import {
  PutFunc as PutFuncDal, PutToValueFunc as PutToValueFuncDal,
  PutFromBodyFunc as PutFromBodyFuncDal
} from '../../dals/putFuncs/EntryFile.js';

import {
  PutFunc as PutFuncDalsForSequelize
} from '../../dalsForSequelize/putFuncs/EntryFile.js';

import ConfigJson from '../../../Config.json' assert {type: 'json'};

let PutFunc = async ({ inDataToUpdate, inId }) => {
  if (ConfigJson.isSequelize) {
    return PutFuncDalsForSequelize({ inDataToUpdate, inId });
  };

  return PutFuncDal({ inDataToUpdate, inId });
};

let PutToValueFunc = async ({ inDataToUpdate, inId, inKeyName }) => {
  if (ConfigJson.isSequelize) {
    return PutFuncDalsForSequelize({ inDataToUpdate, inId });
  };

  return PutToValueFuncDal({ inDataToUpdate, inId, inKeyName });
};

let PutFromBodyFunc = async ({ inDataToUpdate, inId }) => {
  return PutFromBodyFuncDal({ inDataToUpdate, inId });
};

export { PutFunc, PutToValueFunc, PutFromBodyFunc };
