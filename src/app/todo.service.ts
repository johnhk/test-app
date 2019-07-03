
//import { Http } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map(r => r.valueOf()));
  }

  getTodos() {
    return this.http.get('...').pipe(map(r => [1,2,3]));
    //return this.http.get('...').map(r => r.json());
  }

  delete(id) {
    return this.http.delete('...').pipe(map(r => r.toString()));
    //return this.http.delete('...').map(r => r.json());
  }
}
