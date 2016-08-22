'use strict';

import SignupController from './signup.controller';

export default angular.module('weatherForecastAppApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
