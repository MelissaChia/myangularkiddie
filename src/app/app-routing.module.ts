import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { EditComponent } from "./edit/edit.component";
import { AuthGuardGuard } from "./auth-guard.guard";

const routes: Routes = [
  {
    path: "main",
    component: MainComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "edit/:id",
    component: EditComponent,
    canActivate: [AuthGuardGuard]
  },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
