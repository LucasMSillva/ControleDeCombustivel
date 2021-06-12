import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDistribuidoraComponent } from './list-distribuidora.component';

describe('ListDistribuidoraComponent', () => {
  let component: ListDistribuidoraComponent;
  let fixture: ComponentFixture<ListDistribuidoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDistribuidoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
