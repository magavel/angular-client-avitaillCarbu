import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let L;


@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  map = new Map();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


     this.map = L.map('map').setView([43.1, 5.85], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© magavel'
      })
      .addTo(this.map);
    const openseamap = new L.TileLayer('http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'
      )
      .addTo(this.map)
  }

  ngAfterViewInit()
  
  {

    const stationIcon = L.icon({
      iconUrl:'../../../assets/stationIconB.png',
      iconSize:     [30, 30], // size of the icon
    });
  
    this.httpClient.get<any[]>('http://localhost:3000/stations').subscribe(stations=>{

      for (let index = 0; index < stations.length; index++) {
        const station = stations[index];
        console.log(station.position.latitude)
        const marker = L.marker([station.position.latitude, station.position.longitude],{icon:stationIcon})
          .addTo(this.map);
      }
      
   
    });


  
    }
}
