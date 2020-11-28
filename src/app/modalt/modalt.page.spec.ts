import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaltPage } from './modalt.page';

describe('ModaltPage', () => {
  let component: ModaltPage;
  let fixture: ComponentFixture<ModaltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
