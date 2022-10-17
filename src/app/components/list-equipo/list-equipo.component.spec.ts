import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipoComponent } from './list-equipo.component';

describe('ListEquipoComponent', () => {
  let component: ListEquipoComponent;
  let fixture: ComponentFixture<ListEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
