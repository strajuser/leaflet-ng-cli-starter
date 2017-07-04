import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // console.log(proj4);

    // const map = L.map('map'); // .setView([51.505, -0.09], 13);

    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    const crs = new L.Proj.CRS('EPSG:3006',
      '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      {
        resolutions: [
          8192, 4096, 2048, 1024, 512, 256, 128,
          64, 32, 16, 8, 4, 2, 1, 0.5
        ],
        origin: [0, 0],
        bounds: L.bounds([218128.7031, 6126002.9379], [1083427.2970, 7692850.9468])
      });
    const map = new L.Map('map', {
        crs: crs,
      });

    L.tileLayer('https://api.geosition.com/tile/osm-bright-3006/{z}/{x}/{y}.png', {
      maxZoom: 14,
      minZoom: 0,
      // tslint:disable-next-line:max-line-length
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, Imagery &copy; <a href="http://www.kartena.se/">Kartena</a>'
    }).addTo(map);

    map.setView([57.704, 11.965], 13);

    // L.marker([51.5, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();
  }
}
