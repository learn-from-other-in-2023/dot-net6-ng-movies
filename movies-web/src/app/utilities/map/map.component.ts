import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { marker, tileLayer, latLng, Marker, LeafletMouseEvent } from 'leaflet';
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
  onSelectedLocation = new EventEmitter<ICoordinatesMap>();

  layers: Marker<any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  mapComponentOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Angular Movies'
      })
    ],
    zoom: 14,
    center: latLng(18.473564631048617, -69.93999481201173)
  };

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({ latitude, longitude });
    this.layers = [];
    this.layers.push(marker([latitude, longitude]));
    this.onSelectedLocation.emit({ latitude, longitude });
  }

}
