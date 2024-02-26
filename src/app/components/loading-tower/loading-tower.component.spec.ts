import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTowerComponent } from './loading-tower.component';

describe('LoadingTowerComponent', () => {
  let component: LoadingTowerComponent;
  let fixture: ComponentFixture<LoadingTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingTowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
