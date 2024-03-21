import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Figurita } from '../domain-objects/figurita'
import { REST_SERVER_URL } from '../domain-objects/tools'

const ENPOINT_URL = `figuritas`

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor(private http: HttpClient) { }

  searchCards(value: string): Observable<Figurita[]> {
    return this.http.get<Figurita[]>(REST_SERVER_URL + ENPOINT_URL +`/search/${value}`)
  }

}
