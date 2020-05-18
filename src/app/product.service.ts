import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Album } from './models/album';
import { AlbumInfo } from './models/album-info';
@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<AlbumInfo> {
    return this._http.get(this._albumUrl).map(response => <AlbumInfo>response.json());
  }
}
