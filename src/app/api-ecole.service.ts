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


return lienGoogleMap
}


