import { Component, VERSION } from "@angular/core";
import { BreadCrumbService } from "./breadcrumb-services";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  breadcrumb: any = [];
  dataFromServer = [
    {
      link: "home",
      title: "Home"
    },
    {
      link: "home/config",
      title: "Config"
    },
    {
      link: "home/config/grid",
      title: "Grid"
    },
    {
      link: "home/config/grid/1",
      title: "Grid 1"
    }
  ];
  constructor(private breadCrumbService: BreadCrumbService) {
    this.breadCrumbService.currentBreadCrumb.subscribe(value => {
      this.breadcrumb = value;
    });
  }
}
