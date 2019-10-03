import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "edit/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
