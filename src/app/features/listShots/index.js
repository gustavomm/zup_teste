import angular from 'angular';
import uirouter from 'angular-ui-router';
// import ngSanitize from 'angular-sanitize';
import './listshots.css';
import routing from './listShots.routes';
import ListShotsController from './listShots.controller';
import getShots from '../../services/getShots.service';

export default angular.module('app.listShots', [uirouter, getShots])
  .config(routing)
  .controller('ListShotsController', ListShotsController)
  .name;