import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    L.esri.basemapLayer('Streets').addTo(map);

    // L.marker([51.5, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();
  }
}
