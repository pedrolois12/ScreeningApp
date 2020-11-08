import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DorabdominalPage } from './dorabdominal.page';

describe('DorabdominalPage', () => {
  let component: DorabdominalPage;
  let fixture: ComponentFixture<DorabdominalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorabdominalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DorabdominalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
