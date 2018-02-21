//bring in shims to make sure angular2 works for web browsers
import 'core-js/es7/reflect';
import 'core-js/client/shim';
import 'zone/js/dist/zone';

// used to bootstrap ng2 app
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';

// Bootstrap app by referencing the app module
// bootsrap our angular 2 app first then bootstrap angular 1 using upgrade module
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})