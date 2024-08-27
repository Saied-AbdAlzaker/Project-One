import { PizzaComponent } from './pizza/pizza.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent , title: 'home'},
  {path: 'portfolio' , component: PortfolioComponent , title: 'portfolio'},
  {path: 'about' , component: AboutComponent , title: 'about'},
  {path: 'contact' , component: ContactComponent , title: 'contact'},
  {path: 'pizza' , component: PizzaComponent, title: 'pizza'},
  {path: '**' , component: NotFoundComponent,title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
