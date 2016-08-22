'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('weatherForecastAppApp.util', [])
  .factory('Util', UtilService)
  .name;
