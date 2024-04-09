import { Component, OnInit } from '@angular/core';
import { ApiEcoleService } from '../api-ecole.service';
import { CommonModule } from '@angular/common';
import { SanitizerPipe } from '../sanitizer.pipe';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule,SanitizerPipe,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
ecoles = new Map();
textecole1:string;
textecole2:string;
textecole3:string;
position:string;
nombreEcoles:number;
constructor(private ecoleService:ApiEcoleService,)
{
this.nombreEcoles = 0;
this.textecole1 = "";
this.textecole2 = "";
this.textecole3 = "";
this.position="";

}
ngOnInit():void{
this.ecoleService.getEcoles().subscribe((data) => {
this.ecoles = data
this.ecoles.get('resutat').forEach((value:any[],key:any) =>{
this.ecoles.delete('resutat');
this.ecoles.set('ecole'+key,value);
})
this.textecole1 = this.ecoleService.text(this.ecoles.get('ecole0'));
this.textecole2 = this.ecoleService.text(this.ecoles.get('ecole1'));
this.textecole3 = this.ecoleService.text(this.ecoles.get('ecole2'));
this.nombreEcoles = this.ecoles.get('total_count');
this.position = this.ecoleService.position(this.ecoles.get('ecole0'));
}
)

}



}




// placeMarkers() {
//   this.jcdService.getStations().subscribe(
//     (stations: any[]) => {
//       stations.forEach(station => {
//         const { nom, address, available_bikes, position } = station;
//         const { latitude, longitude } = position;
// import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { JcdServiceService } from '../services/jcd-service/jcd-service.service';
// import * as L from 'leaflet';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss']
// })
// export class MapComponent implements OnInit, AfterViewInit {
//   stations: any[] = [];
//   map: L.Map | undefined;

//   constructor(
//     private jcdService: JcdServiceService,
//     private router: Router,
//   ) {}

//   ngOnInit() {
//     this.jcdService.getStations().subscribe(
//       (data: any) => {
//         this.stations = data;
//       },
//       (error: any) => {
//         console.log('Une erreur s\'est produite lors de la récupération des stations de vélos.');
//       }
//     );
//   }

//   ngAfterViewInit() {
//     this.map = L.map('map').setView([47.2184, -1.5536], 12);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(this.map);

//     if (this.map) {
//       this.placeMarkers();
//     }
//   }

//   placeMarkers() {
//     this.jcdService.getStations().subscribe(
//       (stations: any[]) => {
//         stations.forEach(station => {
//           const { nom, address, available_bikes, position } = station;
//           const { latitude, longitude } = position;

//           if (latitude && longitude) {
//             const marker = L.marker([latitude, longitude]);
//             const popupContent = `
//             Nom: ${nom} <br>
//             Adresse : ${address}<br>
//             Nombre de vélos disponibles : ${available_bikes}<br>
//             <button onclick="window.openReservationPage('${nom}')">Réserver un vélo</button>
//           `;
//           marker.addTo(this.map!).bindPopup(popupContent);
//           }
//         });
//       },
//       (error: any) => {
//         console.log('Une erreur s\'est produite lors de la récupération des stations de vélos.');
//       }
//     );
//   }

//   openReservationPage(stationName: string) {
//     this.router.navigate(['/reservation'], { queryParams: { station: stationName } });
//   }
// }

// declare global {
//   interface Window {
//     openReservationPage: (stationName: string) => void;
//   }
// }

// window.openReservationPage = (stationName: string) => {
//   const reservationUrl = `/reservation?station=${encodeURIComponent(stationName)}`;
//   window.open(reservationUrl, '_blank');
// };