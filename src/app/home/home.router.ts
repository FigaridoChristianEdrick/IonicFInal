import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
        {
            path: 'about',
            loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPageModule)
        },
        {
            path: 'faq',
            loadChildren: () => import('../pages/faq/faq.module').then(m => m.FaqPageModule)
        },
        {
          path: 'form',
          loadChildren: () => import('../pages/form/form.module').then(m => m.FormPageModule)
      }
    ]
  }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRouter{

}

