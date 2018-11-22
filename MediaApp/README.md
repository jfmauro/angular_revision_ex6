# MediaApp

This project is intended to study angular 2.

```
  /*
  getMovies(){
	   return this.movies;
  }

  getMovie(id: number){
    return this.movies.find(movie => movie.id === id);
  }

  */

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getMovie(id:number){
    return this.http.get<Movie>(this.baseUrl + '/' + id);
  }
  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(parseInt(id, 10))
                     .subscribe(movie => this.movie=movie);
  }
  
   ngOnInit(){
	   this.movieService.getMovies()
                      .subscribe(movies => this.movies=movies);
  }
```
