import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageslistComponent } from './imageslist.component';

describe('ImageslistComponent', () => {
  let component: ImageslistComponent;
  let fixture: ComponentFixture<ImageslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
