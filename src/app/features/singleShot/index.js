import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './singleShot.routes';
import SingleShotController from './singleShot.controller';
import getShots from '../../services/getShots.service';

export default angular.module('app.singleShot', [uirouter, getShots])
  .config(routing)
  .controller('SingleShotController', SingleShotController)
  .name;