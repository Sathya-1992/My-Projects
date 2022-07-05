import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponentComponent } from './container-component/container-component.component';

const routes: Routes = [
  {path:"",redirectTo:"position",pathMatch:"full"},
  {path:"position",component:ContainerComponentComponent},
  {path:'position/:x/:y',component:ContainerComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
