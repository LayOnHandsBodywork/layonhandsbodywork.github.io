import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ContentContainerComponent } from './components/content-container/content-container.component'
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuButtonComponent } from './components/nav-menu-button/nav-menu-button.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { CorporateWellnessComponent } from './pages/corporate-wellness/corporate-wellness.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'corporatewellness', component: CorporateWellnessComponent },
  { path: '**', component: ErrorPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavMenuComponent,
    ContentContainerComponent,
    FooterComponent,
    NavMenuButtonComponent,
    ErrorPageComponent,
    HomeComponent,
    AboutComponent,
    ScheduleComponent,
    CorporateWellnessComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
