import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminuploadlampofferPage } from './adminuploadlampoffer.page';

describe('AdminuploadlampofferPage', () => {
  let component: AdminuploadlampofferPage;
  let fixture: ComponentFixture<AdminuploadlampofferPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuploadlampofferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminuploadlampofferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
