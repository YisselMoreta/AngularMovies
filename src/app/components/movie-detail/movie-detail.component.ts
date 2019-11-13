import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public detail: string;
  public movie: any;
  public page: number = 0;
  public paramsSubscription:Subscription;
  constructor(public movieService: MovieService,
    public route: ActivatedRoute) { }

  ngOnInit(){
    this.paramsSubscription=this.route.params.subscribe(params=>{
      this.getDetail(params.id)
    })
  }
  getDetail(id){
    this.movieService.getDetail(id, 'es-ES', '1').subscribe(
      res => this.movie = res,
      error => console.log(error))
  }
  

}
