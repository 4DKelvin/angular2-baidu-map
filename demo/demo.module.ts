import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { RouteModule } from './route.module'

import { MenuComponent } from './components/menu.component'
import { DemoComponent } from './demo.component'

import { ApidocModule } from './components/apidoc/index.module'
import { HomeModule } from './components/home/index.module'
import { QuickstartModule } from './components/quickstart/index.module'

@NgModule({
  bootstrap: [DemoComponent],
  declarations: [DemoComponent, MenuComponent],
  imports: [
    BrowserModule,
    RouteModule,
    HomeModule,
    QuickstartModule,
    ApidocModule
  ]
})
export class DemoModule { }
