import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ContactComponent } from '../contact/contact.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


export const routes: Routes = [
{
path:'testMap',
component:MapComponent,
children:[
    {
        path:'contact',
        component:ContactComponent
    }
]
},
{
path:'**',
component:PageNotFoundComponent
}
];
