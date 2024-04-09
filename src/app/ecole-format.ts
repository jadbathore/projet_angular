export default interface IEcoleFormat {
total_count:number,
results:IResultFormat
}

export interface IResultFormat {
    nom_etablissement:string,
    type_etablissement:string,
    adresse_1:string,
    adresse_3:string,
    code_postal:string,
    code_commune:string,
    nom_commune:string,
    code_departement:string,
    code_region:string,
    telephone:string,
    mail:string,
    nombre_d_eleves:number,
    fiche_onisep:null,
    coordx_origine:string,
    coordy_origine:string,
    latitude:string,
    longitude:string,
    date_ouverture:string,
    date_maj_ligne:string,
    etat:string, 
}

