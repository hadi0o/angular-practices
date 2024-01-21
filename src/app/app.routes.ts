import {Routes} from '@angular/router';
import {ApiCompComponent} from "./api-comp/api-comp.component";
import {DropDownChoicesComponent} from "./drop-down-choices/drop-down-choices.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AboutComponent} from "./about/about.component";
import {PrimengComponent} from "./primeng/primeng.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'api', component: ApiCompComponent},
  {path: 'drop-down', component: DropDownChoicesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'primeng', component: PrimengComponent},
  {path: 'not-found', component: NotfoundComponent},
  {path: '**', redirectTo: 'not-found'}
];
