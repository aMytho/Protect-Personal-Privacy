import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public nav = window.navigator;

  public info = {
    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,
    pageon: window.location.pathname,
    referrer: document.referrer,
    previousSites: history.length,
    browserName: navigator.appName,
    browserEngine: navigator.product,
    browserVersion1a: navigator.appVersion,
    browserVersion1b: navigator.userAgent,
    browserLanguage: navigator.language,
    browserOnline: navigator.onLine,
    browserPlatform: navigator.platform,
    javaEnabled: navigator.javaEnabled(),
    dataCookiesEnabled: navigator.cookieEnabled,
    dataCookies1: document.cookie,
    dataCookies2: decodeURIComponent(document.cookie.split(";").toString()),
    dataStorage: null,
    sizeScreenW: screen.width,
    sizeScreenH: screen.height,
    sizeInW: innerWidth,
    sizeInH: innerHeight,
    sizeAvailW: screen.availWidth,
    sizeAvailH: screen.availHeight,
    scrColorDepth: screen.colorDepth,
    scrPixelDepth: screen.pixelDepth,
    // latitude(){return position.coords.latitude},
    // longitude(){return position.coords.longitude},
    // accuracy(){return position.coords.accuracy},
    // altitude(){return position.coords.altitude},
    // altitudeAccuracy(){return position.coords.altitudeAccuracy},
    // heading(){return position.coords.heading},
    // speed(){return position.coords.speed},
    // timestamp(){return position.timestamp},

  };

  ngOnInit(): void {

    
  }
}
