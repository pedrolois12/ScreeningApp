import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuchefePage } from './menuchefe.page';

describe('MenuchefePage', () => {
  let component: MenuchefePage;
  let fixture: ComponentFixture<MenuchefePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuchefePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuchefePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
