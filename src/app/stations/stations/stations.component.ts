import { Component, OnInit } from '@angular/core';
//import '../../../../node_modules/leaflet'

declare let L;

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const map = L.map('map').setView([43.1, 5.85], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //L.tileLayer('http://t1.openseamap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

}
