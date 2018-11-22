import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'media-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  public movie : Movie;

  constructor (
    private movieService : MoviesService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(parseInt(id, 10))
                     .subscribe(movie => this.movie=movie);
  }

}
