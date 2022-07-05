import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainercomponentComponent } from './containercomponent/containercomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NewscardcomponentComponent } from './newscardcomponent/newscardcomponent.component';
import { SubNewscomponentComponent } from './sub-newscomponent/sub-newscomponent.component';
import { FollowcomponentComponent } from './followcomponent/followcomponent.component';
import { FollowtopiccomponentComponent } from './followtopiccomponent/followtopiccomponent.component';
import { MainnewscomponentComponent } from './mainnewscomponent/mainnewscomponent.component';
import { FilterPipe } from './filter.pipe';
import { NewsModel } from './newsModel';
import { SelectedTopicDirective } from './selected-topic.directive';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { FollowingDirective } from './following.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContainercomponentComponent,
    HeadercomponentComponent,
    NavbarcomponentComponent,
    HomecomponentComponent,
    NewscardcomponentComponent,
    SubNewscomponentComponent,
    FollowcomponentComponent,
    FollowtopiccomponentComponent,
    MainnewscomponentComponent,
    FilterPipe,
    SelectedTopicDirective,
    SearchPipe,
    FirstcomponentComponent,
    FollowingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
