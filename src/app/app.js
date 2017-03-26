import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import {trustUrl, routing} from './app.config';
import listShots from './features/listShots';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, listShots])
  .config(routing)
  .config(trustUrl);

export default MODULE_NAME;