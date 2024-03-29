import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { marker, tileLayer, latLng, Marker, LeafletMouseEvent, icon, Icon } from 'leaflet';
import { ICoordinatesMap, ICoordinatesMapWithMessage } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input()
  initialCoordinates: ICoordinatesMapWithMessage[] = [];

  @Input()
  editMode: boolean = true;

  @Output()
  onSelectedLocationEvent = new EventEmitter<ICoordinatesMap>();

  defaultIcon = {
    icon: icon({
      ...Icon.Default.prototype.options,
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  markerLayers: Marker<any>[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.initialCoordinates);

    this.markerLayers = this.initialCoordinates.map((value: any) => {
      const m = this.getMarker(value.latitude, value.longitude);

      if (value.message) {
        m.bindPopup(value.message, { autoClose: false, autoPan: false });
      }

      return m;
    });
  }

  mapComponentOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Movies World'
      })
    ],
    zoom: 14,
    center: latLng(17.38714, 78.491684)
  };

  handleMapClick(event: LeafletMouseEvent) {
    if (this.editMode) {
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({ latitude, longitude });

      this.markerLayers = [];
      this.markerLayers.push(this.getMarker(latitude, longitude));

      this.onSelectedLocationEvent.emit({ latitude, longitude });
    }
  }

  getMarker(latitude: number, longitude: number): Marker | any {

    if (latitude === undefined || longitude === undefined) {
      return;
    }

    return marker([latitude, longitude], this.defaultIcon);
  }

}
