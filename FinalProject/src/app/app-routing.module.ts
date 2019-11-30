import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadComponent} from './read/read.component'
import {CreateComponent} from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [

 {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
  path:'news',
  component: NewsComponent
},
{
  path:'weather',
  component: WeatherComponent
}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
