import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(public httpClient: HttpClient) {}

  getKindergartens() {
    return this.httpClient.get(
      "https://kiddiemel.herokuapp.com/api/kindergartens"
      // "https://ada-wanmuz15-api.herokuapp.com/api/kindergartens"
    );
  }

  login(data) {
    return this.httpClient.post(
      "https://kiddiemel.herokuapp.com/api/login",
      data
    );
  }

  addKindergarten(data) {
    return this.httpClient.post(
      "https://kiddiemel.herokuapp.com/api/kindergartens",
      data
    );
  }

  getKindergartenById(id) {
    return this.httpClient.get(
      "https://kiddiemel.herokuapp.com/api/kindergartens/" + id
    );
  }
  editKindergarten(id, data) {
    return this.httpClient.post(
      "https://kiddiemel.herokuapp.com/api/kindergartens/" + id,
      data
    );
  }
}
