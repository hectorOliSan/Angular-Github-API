import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'af68e96dd279b7ca7b59';
  private client_secret = '4d8a83677cabe69571ccab6f76a0ebe65c4d94e2';

  constructor(private _http: HttpClient) {
    this.username = 'hectorOliSan';
  }

  getUser() {
    return this._http
      .get(
        'https://api.github.com/users/' +
          this.username +
          '?client_id=' +
          this.client_id +
          '&client_secret=' +
          this.client_secret
      )
      .pipe(map((res) => res));
  }

  getRepos() {
    return this._http
      .get(
        'https://api.github.com/users/' +
          this.username +
          '/repos' +
          '?client_id=' +
          this.client_id +
          '&client_secret=' +
          this.client_secret
      )
      .pipe(map((res) => res));
  }

  updateUser(username: string) {
    this.username = username;
  }
}
