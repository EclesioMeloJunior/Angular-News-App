import { NewsApiService } from './../_services/news-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sources: Array<any>;
  articles: Array<any>;

  constructor(private newsApiService: NewsApiService) {
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
}
