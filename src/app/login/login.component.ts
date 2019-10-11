import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  data = {
    username: "",
    password: ""
  };

  constructor(public apiService: ApiService, public router: Router) {}

  ngOnInit() {}

  submitPressed() {
    this.apiService.login(this.data).subscribe(resp => {
      console.log(resp);

      if (resp["success"] == true) {
        let token = resp["token"].split(" ")[1];
        console.log(token);
        localStorage.setItem("token", token);
        window.location.href = "/main";
      }
    });
  }
}
