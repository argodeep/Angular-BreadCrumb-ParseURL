import { Injectable } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class BreadCrumbService {
  currentBreadCrumb = new Subject();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.firstChild;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let paths = event.urlAfterRedirects.split("/");
        let parsedObj: BreadCrumbObj[] = [];
        let level = 1;
        while (level < paths.length) {
          const ar = paths.slice(1, level + 1);
          parsedObj.push({
            title: ar.slice(-1).join(""),
            url: ar.join("/")
          });
          level++;
        }
        this.currentBreadCrumb.next(parsedObj);
      }
    });
  }
}

export interface BreadCrumbObj {
  title: string;
  url: string;
}
