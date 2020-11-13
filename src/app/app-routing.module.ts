import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MotherComponent } from './mother/mother.component';
import { SoundComponent } from './sound/sound.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'mother', component: MotherComponent},
  {path: 'video', component: VideoComponent},
  {path: 'sound', component: SoundComponent},
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
