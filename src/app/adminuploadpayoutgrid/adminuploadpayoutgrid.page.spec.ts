import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminuploadpayoutgridPage } from './adminuploadpayoutgrid.page';

describe('AdminuploadpayoutgridPage', () => {
  let component: AdminuploadpayoutgridPage;
  let fixture: ComponentFixture<AdminuploadpayoutgridPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuploadpayoutgridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminuploadpayoutgridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
