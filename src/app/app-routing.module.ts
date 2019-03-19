import { HomeComponent } from './home/home.component';
import { SpeechComponent } from './speech/speech.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'todo', component: HomeComponent},
  {path: 'speech', component: SpeechComponent},
  {path: '', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
