import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'; //Required for map() in Method-1 of fetchData()

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){

    /*
    Method-1
    get() returns an Observable, which should be subscribed to,
    in order to access the data - this should be done in the component which invokes fetchData();
    
    The output of get() is assigned to another Observable - the map() to return data in JSON format
    */
    return this.http.get('https://angular2-6d9aa.firebaseio.com/.json').map(
      (res) => res.json()
    );


    /*
    Method-2
    Does not require - import 'rxjs/Rx';
    */
    //return this.http.get('./ninjas.json');

  }

}
