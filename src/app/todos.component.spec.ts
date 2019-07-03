import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('Sæt Todo property til værdien der kommer tilbage fra Serveren', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([[1,2,3]]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
  });
});
