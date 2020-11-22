import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalOnePage } from './modal-one.page';

describe('ModalOnePage', () => {
  let component: ModalOnePage;
  let fixture: ComponentFixture<ModalOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
