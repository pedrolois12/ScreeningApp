import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuExamplePage } from './menu-example.page';

describe('MenuExamplePage', () => {
  let component: MenuExamplePage;
  let fixture: ComponentFixture<MenuExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuExamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
