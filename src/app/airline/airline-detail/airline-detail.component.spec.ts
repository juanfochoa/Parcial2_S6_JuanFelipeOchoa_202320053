import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AirlineDetailComponent } from './airline-detail.component';
import { AirlineService } from '../airline.service';

describe('AirlineDetailComponent', () => {
  let component: AirlineDetailComponent;
  let fixture: ComponentFixture<AirlineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AirlineDetailComponent
      ],
      providers: [
        AirlineService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1',
              },
            },
          },
        }
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AirlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});