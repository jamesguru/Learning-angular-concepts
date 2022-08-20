import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SinglebookComponent } from './components/singlebook/singlebook.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {path:'',component:ProductsComponent},
  {path:'login',component:LoginComponent, canActivate:[AuthGuard]},
  {path:'book/:id',component:SinglebookComponent, canActivate:[AuthGuard]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
