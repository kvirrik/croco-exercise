import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProvidersComponent } from './game-providers.component';

describe('GameProvidersComponent', () => {
  let component: GameProvidersComponent;
  let fixture: ComponentFixture<GameProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameProvidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
