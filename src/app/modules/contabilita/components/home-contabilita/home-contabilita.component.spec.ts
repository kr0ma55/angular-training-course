import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContabilitaComponent } from './home-contabilita.component';

describe('HomeContabilitaComponent', () => {
  let component: HomeContabilitaComponent;
  let fixture: ComponentFixture<HomeContabilitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeContabilitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContabilitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
