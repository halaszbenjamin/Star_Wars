import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({
    'Applicant-Id': 'gAHra2TrHNXA7LMX',
    'Application-Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhc2Rhc2Rhc2Rhc2Rhc2Rhc2QifQ.2cOfI5PKBkkYI8rFHyPhxgn9oPEXfoVPwO16_xfPQ6Y'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  fighterSubject = new Subject<string[]>();

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<any> {
    return this.http.get('https://developer.webstar.hu/rest/frontend-felveteli/characters/', httpOptions);
  }

  sendOpponents(opponents: string[]) {
    this.fighterSubject.next(opponents);
  }

  receiveOpponents(): Observable<any> {
    return this.fighterSubject.asObservable();
  }
}
