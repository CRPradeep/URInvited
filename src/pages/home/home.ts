import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
// import { GoogleMap, GoogleMapsEvent, GoogleMaps, GoogleMapOptions } from '@ionic-native/google-maps';
import { NativeAudio } from '@ionic-native/native-audio';
import * as content from "../../assets/data/app_input.json"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // map: GoogleMap;
  _content: any = content;
  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio, public platform: Platform) {
    platform.ready().then(() => {
      this.nativeAudio.preloadComplex('uniqueId1', 'assets/audio/bg_audio.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.loop('uniqueId1');
      }, this.onAudioLoadFailed);
    });
  }

  onAudioLoadFailed(err): void {
    console.log("error in loading the audio file..." + JSON.stringify(err));
  }

  /* loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: content['events']['wedding']['lat'],
          lng: content['events']['wedding']['lng']
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: content['events']['wedding']['lat'],
            lng: content['events']['wedding']['lng']
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  } */

  /* loadMap(){
    this.map = new GoogleMap('map_canvas', {
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });
} */
}
