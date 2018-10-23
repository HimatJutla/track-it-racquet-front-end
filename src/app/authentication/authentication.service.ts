import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable, of, from } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {}

}