import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult:undefined|[]

  constructor(private activeRoute: ActivatedRoute, private apiService:ApiServiceService) { }


  ngOnInit(): void {




  }

}
