import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import { Movie } from 'src/app/models/Movie.model';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  public movies:Array<Movie>=[];
  constructor(public movieService:MovieService) { }

  ngOnInit() {
    
  }

  searchMovies(search:string){
    if(search.length>0)this.movieService.searchMovie(encodeURI(search)).subscribe(
      res=>this.movies=res['results'])
      else this.movies=[]
  }

}
