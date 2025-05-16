import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AirlineService } from './airline.service';

describe('AirlineService', () => {
  let service: AirlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AirlineService]
    });
    service = TestBed.inject(AirlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});