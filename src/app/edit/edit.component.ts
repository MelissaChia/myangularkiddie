import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  editData = {
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
  id;
  success = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    public apiService: ApiService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.apiService.getKindergartenById(this.id).subscribe(resp => {
      this.editData = resp["data"];
    });
  }
  updateKindergarten() {
    this.apiService.editKindergarten(this.id, this.editData).subscribe(resp => {
      console.log(resp);
      if (resp["message"] == "Kindergarten succesfully updated!") {
        this.success = true;
      }
    });
  }
}
