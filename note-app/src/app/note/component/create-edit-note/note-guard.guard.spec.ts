import { TestBed } from '@angular/core/testing';

import { NoteGuardGuard } from './note-guard.guard';

describe('NoteGuardGuard', () => {
  let guard: NoteGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoteGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
