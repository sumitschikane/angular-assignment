import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseconceptsComponent } from "./baseconcepts/baseconcepts.component";
import { AddconceptComponent } from "./addconcept/addconcept.component";

const routes: Routes = [
  { path: "", component: BaseconceptsComponent },
  { path: "addnew", component: AddconceptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
