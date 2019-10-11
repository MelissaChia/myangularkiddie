import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  data = {
    name: "",
    desription: "",
    email: "",
    phone: "",
    url: "",
    opening_hours: "",
    image_url: "",
    latitude: "",
    longitude: ""
  };

  isLoggedIn = false;
  constructor(public apiService: ApiService, public router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("token") != null) {
      this.isLoggedIn = true;
    }
  }

  loggedOutPressed() {
    localStorage.removeItem("token");
    window.location.href = "/main";
  }

  addKindergarten() {
    this.apiService.addKindergarten(this.data).subscribe(resp => {
      console.log(resp);
    });
  }
}
