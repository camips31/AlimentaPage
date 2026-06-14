import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nosotros', component: AboutComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'planes', component: PlansComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', redirectTo: '' }
];
