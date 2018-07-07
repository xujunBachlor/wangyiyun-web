import { Page404Component } from './../main/page404/page404.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route} from '@angular/router';

const router: Route[] = [{
  path: '', redirectTo: 'aaa', pathMatch: 'full'
}, {
  path: '**', component: Page404Component
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouteConfigModule { }
