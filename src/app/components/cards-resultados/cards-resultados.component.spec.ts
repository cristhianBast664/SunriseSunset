import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsResultadosComponent } from './cards-resultados.component';

describe('CardsResultadosComponent', () => {
  let component: CardsResultadosComponent;
  let fixture: ComponentFixture<CardsResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
