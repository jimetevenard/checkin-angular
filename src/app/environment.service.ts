import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentConfig } from './environment-config';

const CONF_URL:string = 'config.json';

@Injectable()
export class EnvironmentService {

  constructor(private http: HttpClient) { }

  public getEnvironmentConfig(): Observable<EnvironmentConfig> {
    // TODO : Mise en cache
    return this.http.get<EnvironmentConfig>(CONF_URL);
  }

}
