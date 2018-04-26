import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ERS_REIMBURSEMENT } from '../models/ERS_REIMBURSEMENT';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ERS_USERS } from '../models/ERS_USERS';

const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }), };

@Injectable()
export class ReimbursementService {
  subscriber: BehaviorSubject<ERS_REIMBURSEMENT> = new BehaviorSubject<ERS_REIMBURSEMENT>(null);

  constructor(private http: HttpClient) {}

public Createreimb( reimb: ERS_REIMBURSEMENT) {

  console.log(`Attempting to add reimbursement`);
  const json = JSON.stringify(reimb);
  console.log(json);
  return this.http.post<ERS_REIMBURSEMENT>(API_URL + 'request', json, HTTP_OPTIONS);
 }

public ReadAllreimb(reimb: ERS_REIMBURSEMENT[]) {
  const json = JSON.stringify(reimb);
  return this.http.post<ERS_REIMBURSEMENT>(API_URL + 'all', json, HTTP_OPTIONS);
}

public Readmyreimb(user: ERS_USERS) {
  const json = JSON.stringify(user);
  return this.http.post<ERS_REIMBURSEMENT>(API_URL + 'mine', json, HTTP_OPTIONS);
}

public UpdateReimb(reimb: ERS_REIMBURSEMENT) {
    const json = JSON.stringify(reimb);
    return this.http.post<ERS_REIMBURSEMENT>(API_URL + 'update', json, HTTP_OPTIONS);
  }
}

