import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/filter/filter.pipe';
import { MatCardModule } from '@angular/material';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DisplayComponent,
        FilterPipe,

       ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,

        
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
