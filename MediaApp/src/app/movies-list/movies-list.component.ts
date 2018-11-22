import { Component, OnInit } from '@angular/core';
import {Movie} from './../movie.model';
import {MoviesService} from './../movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'media-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  public movies: Movie[];

  constructor (private movieService : MoviesService ){}

  ngOnInit(){
	   this.movieService.getMovies()
                      .subscribe(movies => this.movies=movies);
  }

}
