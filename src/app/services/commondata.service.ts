import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
allPendingAgents:any=[];
allPendingBusiness: any = [];
  allBusinessUsers: any = [];
  allInvalidBusiness: any = [];
  constructor() { }
}
