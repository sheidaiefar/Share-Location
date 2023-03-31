import { AfterViewInit, Component, HostListener } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  map: any;
  //markers: MarkerModel[] = [];

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [49.290164, 11.1633],
      zoom: 3,
    });

    const tiles = Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
      }
    );
    tiles.addTo(this.map);
    // if (this.markers.length >= 1) this.SetMarkers(this.markers);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.map.on('click', (e: any) => {
      console.log(e);
      //       let obj : any
      //       obj.position = [lat, lang];
    });
  }
}
