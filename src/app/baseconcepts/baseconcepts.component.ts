import { Component, OnInit, Renderer } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../data.service";

@Component({
  selector: "app-baseconcepts",
  templateUrl: "./baseconcepts.component.html",
  styleUrls: ["./baseconcepts.component.css"]
})
export class BaseconceptsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  baseConcepts: Object;
  labels: any;

  constructor(
    private data: DataService,
    private renderer: Renderer,
    private router: Router
  ) {}

  onClickConcept(concept) {
    this.data.getBaseLabels(concept.concept_id).subscribe(labeldata => {
      this.labels = labeldata;
    });
  }

  onClickEditConcept(concept) {
    const params = {
      id: concept.id,
      concept_id: concept.concept_id,
      concept_name: concept.concept_name,
      concept_type: concept.concept_type,
      period_type: concept.period_type
    };
    this.router.navigate(["/addnew"], {
      queryParams: params
    });
  }

  onClickDeleteConcept(concept) {
    this.data.deleteConcept({ id: concept.concept_id }).subscribe(data => {
      this.baseConcepts = data;
    });
  }

  ngOnInit() {
    this.data.getBaseConcepts().subscribe(data => {
      this.baseConcepts = data;
    });
  }
}
