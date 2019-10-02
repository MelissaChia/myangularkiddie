import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

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

  constructor(public apiService: ApiService) {}

  ngOnInit() {}

  addKindergarten() {
    this.apiService.addKindergarten(this.data).subscribe(resp => {
      console.log(resp);
    });
  }
}
