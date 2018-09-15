import { reportABugAction } from './reportABugAction';

let app = angular.module('centralCustom', [
                                        'angularLoad',
                                        'reportABugAction'
                                      ]);

app
  .component('prmActionContainerAfter', {
    // bindings: { parentCtrl: "<" },
    // template: customActionsConfig.template
    template: '<report-bug-action></report-bug-action>'
})