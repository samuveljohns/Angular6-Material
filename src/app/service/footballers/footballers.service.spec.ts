import { TestBed, inject } from '@angular/core/testing';

import { FootballersService } from './footballers.service';

describe('FootballersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballersService]
    });
  });

  it('should be created', inject([FootballersService], (service: FootballersService) => {
    expect(service).toBeTruthy();
  }));
});
