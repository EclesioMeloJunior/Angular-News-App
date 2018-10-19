import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http
      .get(`https://newsapi.org/v2/sources?language=en&apiKey=${environment.news.key}`);
  }

  initArticles() {
    return this.http
      .get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${environment.news.key}`);
  }

  getArticlesByID(source: String) {
    return this.http
      .get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${environment.news.key}`);
  }
}
