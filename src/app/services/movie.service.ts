import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  [x: string]: any;
  constructor(public http:HttpClient) { }//inyectamos el httpClient de angular para hacer AJAX
  
  getMovies(category:string,language:string,page:string):Observable<object>{//creamos tantos métodos como necesitemos para traer la información que requieren nuestros componentes
    return this.http.get(`https://api.themoviedb.org/3/movie/${category}?api_key=3d602d7ff833ce531e0c9f46a78acb81&language=${language}&page=${page}`);
  }
   getDetail(id:string,language:string,page:string):Observable<object>{//creamos tantos métodos como necesitemos para traer la información que requieren nuestros componentes
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3d602d7ff833ce531e0c9f46a78acb81&language=${language}&page=${page}`);
  }
  searchMovie(search: string): Observable<object> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=3d602d7ff833ce531e0c9f46a78acb81&language=en-US&page=1&include_adult=false&query=${search}`)
  }
  
  
}
