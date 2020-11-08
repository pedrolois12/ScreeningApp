import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TriagemPage } from './triagem.page';

describe('TriagemPage', () => {
  let component: TriagemPage;
  let fixture: ComponentFixture<TriagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TriagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
