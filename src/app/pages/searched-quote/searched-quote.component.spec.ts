import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedQuoteComponent } from './searched-quote.component';

describe('SearchedQuoteComponent', () => {
  let component: SearchedQuoteComponent;
  let fixture: ComponentFixture<SearchedQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
