import { RouteConfigModule } from './route-config/route-config.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElModule } from 'element-angular';
import { FormsModule} from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { Page404Component } from './main/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteConfigModule,
    NgxEchartsModule,
    HttpClientModule,
    ElModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
