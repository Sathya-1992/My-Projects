import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowcomponentComponent } from './followcomponent/followcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

const routes: Routes = [
  {path:"",component:HomecomponentComponent},
  {path:"Home",component:HomecomponentComponent},
  {path:"Follow",component:FollowcomponentComponent},
  {path:"Home/:topicName",component:HomecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
