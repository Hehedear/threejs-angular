import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageComponent} from './pages/message/message.component';
import {NavigationComponent} from './pages/navigation/navigation.component';

const routes: Routes = [
  {
    path: 'message',
    component: MessageComponent,
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
