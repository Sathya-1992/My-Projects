import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursorComponentComponent } from './cursor-component/cursor-component.component';
import { DataService } from './data.service';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import {HttpClientModule} from '@angular/common/http';
import { ContainerComponentComponent } from './container-component/container-component.component'
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CursorComponentComponent,
    DetailsComponentComponent,
    DialogComponentComponent,
    ContainerComponentComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
