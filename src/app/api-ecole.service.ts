import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IEcoleFormat from './ecole-format';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})



export class ApiEcoleService{
private apiUrl = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?';
private code_postal = "83210";
private limite = "10";
private ecoles:Observable<IEcoleFormat[]> | undefined = undefined

constructor(protected http:HttpClient) {

}
getEcoles(){
const url = `${this.apiUrl}where=code_postal%3D${this.code_postal}&limit=${this.limite}`
if(!this.ecoles){
console.log('chargement des ecoles');
this.ecoles = this.http.get<IEcoleFormat[]>(url)
}
return this.ecoles.pipe(
map((ecoles:IEcoleFormat[])=>{
return this.maping(ecoles)
}))
}

maping(maping:any){
const mapping = new Map()
.set("total_count",maping.total_count)
.set("resutat",maping.results);
return mapping
}

text(test:any):string{
const textEcole = `l'ecole " ${test.nom_etablissement}" l'etablissement est de type"${test.type_etablissement}" cette etablissement à été crée en ${test.date_ouverture},à ce jours ${test.nombre_d_eleves} éleves y etudie.
adresse postal : ${test.adresse_1}, ${test.adresse_3}
mail:${test.mail}
telephone:${test.telephone}`
return textEcole
}

position(test:any):string{
const lienGoogleMap = `http://maps.google.com/maps?q=${test.latitude},${test.longitude}&z=15&output=embed`;

// <iframe src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"></iframe >

return lienGoogleMap
}



  // array.forEach((element:any)=>{
  // element = new Map()
  // .set(`nom_etablissement${element}`,element.nom_etablissement)
  // .set(`type_etablissement${element}`,element.type_etablissement)
  // .set(`adresse_1${element}`,element.adresse_1)
  // .set(`adresse_3${element}`,element.adresse_3)
  // .set(`telephone${element}`,element.telephone)
  // .set(`mail:${element}`,element.mail);
  // })
  }






// map((stations:any[])=>{
 // where=code_postal%3D83210&limit=3
  // return stations.map(station =>({
  // nom_etablissement: station.name,
  // type_etablissement: station.type,
  // adresse_1: station.adresse,
  // position: {
  // lon: station.position.lon,
  // lat: station.position.lat,
  // },
// resultformateur(results:any[]){
//   results.forEach(element => {
//     element.pipe(
//   map((results:any[])=>{
//   return results.map(result =>({
//     nom_etablissement:result.nom_etablissement,
//     type_etablissement:result.type_etablissement,
//     adresse_1:result.adresse_1,
//     adresse_3:result.adresse_3,
//     code_postal:result.code_postal,
//     code_commune:result.code_commune,
//     nom_commune:result.nom_commune,
//     code_departement:result.code_departement,
//     code_region:result.code_region,
//     telephone:result.telephone,
//     mail:result.mail,
//     nombre_d_eleves:result.nombre_d_eleves,
//     fiche_onisep:result.fiche_onisep,
//     coordx_origine:result.coordx_origine,
//     coordy_origine:result.coordy_origine,
//     latitude:result.latitude,
//     longitude:result.longitude,
//     date_ouverture:result.date_ouverture,
//     date_maj_ligne:result.date_maj_ligne,
//     etat:result.etat,
//   }))
//   }))
//   })
//   }
//}

// .pipe(
//   map((stations: any[]) => {
//     return stations.map(station => ({
//       nom: station.name,
//       address: station.address,
//       available_bikes: station.available_bikes,
//       position: {
//         latitude: station.position.lat,
//         longitude: station.position.lng
//       }
//     }));
//   })
// );

// resultformateur(results:any[]){
//   results.forEach(element => {
//     element.pipe(
//   map((results:any[])=>{
//   return results.map(result =>({
//     nom_etablissement:result.nom_etablissement,
//     type_etablissement:result.type_etablissement,
//     adresse_1:result.adresse_1,
//     adresse_3:result.adresse_3,
//     code_postal:result.code_postal,
//     code_commune:result.code_commune,
//     nom_commune:result.nom_commune,
//     code_departement:result.code_departement,
//     code_region:result.code_region,
//     telephone:result.telephone,
//     mail:result.mail,
//     nombre_d_eleves:result.nombre_d_eleves,
//     fiche_onisep:result.fiche_onisep,
//     coordx_origine:result.coordx_origine,
//     coordy_origine:result.coordy_origine,
//     latitude:result.latitude,
//     longitude:result.longitude,
//     date_ouverture:result.date_ouverture,
//     date_maj_ligne:result.date_maj_ligne,
//     etat:result.etat,
//   }))
//   }))
//   })
//   return results;
//   }

//.subscribe((data:any)=>{
  // this.ecoles = data;
  // console.log(this.ecoles);
  // })
  // }

// getStations():Observable<any>{
// const urlselectionner = this.getUrl(this.code_postal,this.limite);
// return this.http.get<any[]>(urlselectionner).pipe(
//
// mail:station.mail,
// telephone:station.telephone,
// }))
// })
// )
// }

//}



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%3D83210&limit=3
// @Injectable({
//   providedIn: 'root'
// })
// export class JcdServiceService {
//   private apiUrl = 'https://api.jcdecaux.com/vls/v1/';
//   private nominatimUrl = 'https://nominatim.openstreetmap.org/search';

//   constructor(private http: HttpClient) { }

//   getStations(): Observable<any> {
//     const apiKey = '709c8fbfe38c2d2a494ea8d5d9e6f01045ab775e'; 
//     const contract = 'nantes';
//     const url = `${this.apiUrl}stations?contract=${contract}&apiKey=${apiKey}`;
//     return this.http.get<any[]>(url).pipe(
//       map((stations: any[]) => {
//         return stations.map(station => ({
//           nom: station.name,
//           address: station.address,
//           available_bikes: station.available_bikes,
//           position: {
//             latitude: station.position.lat,
//             longitude: station.position.lng
//           }
//         }));
//       })
//     );
//   }
// }