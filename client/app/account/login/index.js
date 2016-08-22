'use strict';

import LoginController from './login.controller';

export default angular.module('weatherForecastAppApp.login', [])
  .controller('LoginController', LoginController)
  .name;
