import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { marker, tileLayer, latLng, Marker, LeafletMouseEvent, icon } from 'leaflet';
import { ICoordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input()
  initialCoordinates: ICoordinatesMap[] = [];

  @Output()
  onSelectedLocationEvent = new EventEmitter<ICoordinatesMap>();

  defaultIcon = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  layers: Marker<any>[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.initialCoordinates);

    if (this.initialCoordinates.length > 0 && this.initialCoordinates[0].latitude !== undefined && this.initialCoordinates[0].longitude !== undefined) {
      this.layers.push(this.getMarker(this.initialCoordinates[0].latitude, this.initialCoordinates[0].longitude));
    }
    // this.layers = this.initialCoordinates.map(value => this.getMarker(value.latitude, value.longitude));
  }

  mapComponentOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Angular Movies'
      })
    ],
    zoom: 14,
    center: latLng(17.38714, 78.491684)
  };

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({ latitude, longitude });

    this.layers = [];
    this.layers.push(this.getMarker(latitude, longitude));

    this.onSelectedLocationEvent.emit({ latitude, longitude });
  }

  getMarker(latitude: number, longitude: number): Marker | any {

    if (latitude === undefined || longitude === undefined) {
      return;
    }

    return marker([latitude, longitude], this.defaultIcon);
  }

}
