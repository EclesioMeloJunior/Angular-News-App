import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { NewsApiService } from './../_services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sources: Array<any>;
  articles: Array<any>;

  constructor(
    private router: Router,
    private newsApiService: NewsApiService,
    private authService: AuthService) {
    console.log('Componente criado');
  }

  ngOnInit() {
    console.log('componente iniciado');

    this.newsApiService.initArticles()
      .subscribe(data => this.articles = data['articles']);

    this.newsApiService.initSources()
      .subscribe(data => this.sources = data['sources']);
  }

  searchArticles(source) {
    console.log(`Searching by ${source}`);

    this.newsApiService.getArticlesByID(source)
      .subscribe(data => this.articles = data['articles']);
  }

  logoutAction() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
}
