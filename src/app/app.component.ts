import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from './@commons/services/dynamic-script-loader-service.service';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'sncf-mobilite';

  constructor(private dynamicScriptLoaderService: DynamicScriptLoaderService) {}

  ngOnInit() {
    document.addEventListener('deviceready', (e) => {
      console.log(e);
    }, false);
    this.dynamicScriptLoaderService
      .loadScript('cordova')
      .then((data) => {
        console.log('cordova loaded with success');
      })
      .catch(error => console.log('cordova not loaded. may be not an cordova app'));
  }

}
