import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminmonthlypayoutsPage } from './adminmonthlypayouts.page';

describe('AdminmonthlypayoutsPage', () => {
  let component: AdminmonthlypayoutsPage;
  let fixture: ComponentFixture<AdminmonthlypayoutsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmonthlypayoutsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminmonthlypayoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
