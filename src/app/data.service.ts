import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  // fetch the concept list
  getBaseConcepts() {
    return this.http.get("http://localhost:3002/api/baseconcepts");
  }

  // fetch the labels related to concept_id
  getBaseLabels(conceptId) {
    return this.http.get("http://localhost:3002/api/baselabels/" + conceptId);
  }

  // Add new concept
  addNewConcept(data) {
    return this.http.post("http://localhost:3002/api/addconcept/", data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  // Delete existing concept using concept_id
  deleteConcept(conceptId) {
    return this.http.post(
      "http://localhost:3002/api/deleteconcept/",
      conceptId,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }

  // Edit existing concept using concept_id
  editConcept(data) {
    return this.http.post("http://localhost:3002/api/editconcept/", data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
