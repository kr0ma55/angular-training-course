import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemagazzinoComponent } from './homemagazzino.component';

describe('HomemagazzinoComponent', () => {
  let component: HomemagazzinoComponent;
  let fixture: ComponentFixture<HomemagazzinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomemagazzinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomemagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
