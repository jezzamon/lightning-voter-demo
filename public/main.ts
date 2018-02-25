


// used to bootstrap ng2 app
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { UpgradeModule, downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { NameParser } from './app/admin/nameParser.servce';
import { UnreviewedTalkComponent } from './app/home/unreviewedTalk.component';

declare var angular: angular.IAngularStatic;


// Bootstrap app by referencing the app module
// bootsrap our angular 2 app first then bootstrap angular 1 using upgrade module
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // downgrades
  angular.module('app')
    .factory('nameParser', downgradeInjectable(NameParser))
    .directive('unreviewedTalk', downgradeComponent({
      component: UnreviewedTalkComponent
    }))
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  
  // set a timeout so that angular2 can be fully bootstrapped before bootstrapping angular 1
  setTimeout(function() {
    upgrade.bootstrap(document.documentElement, ['app']);
  },2000)
    
  
  console.log('hybrid app bootstrapped');
})