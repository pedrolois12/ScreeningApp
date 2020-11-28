import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultachefePage } from './consultachefe.page';

describe('ConsultachefePage', () => {
  let component: ConsultachefePage;
  let fixture: ComponentFixture<ConsultachefePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultachefePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultachefePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
