import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoadingBarModule, LoadingBarService} from "ngx-loading-bar";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { LoadingModule } from 'ngx-loading';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Navigation } from "./navigation/navigation.component";
import {MatPaginatorModule} from '@angular/material/paginator';
// import {NgxPaginationModule} from 'ngx-pagination';
// import { MatPaginatorModule } from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
 // <-- import the module
// import {DataTableModule} from "angular-6-datatable";
import { MatTableModule,MatSortModule} from '@angular/material';
import { UserExistComponent } from './user-exist/user-exist.component';

import { SelectDropDownModule } from 'ngx-select-dropdown'
import {

  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
// import { RegistrationComponent } from './registration/registration.component';

// import { VendorComponent } from "src/app/vendor/vendor.component";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
//import { RegisterService } from "src/app/registration/register.service";

//import { ExistingComponent } from './existing/existing.component';
import { UserComponent } from "src/app/user/user.component";
//import { ExistVendorsComponent } from "src/app/exist-vendors/exist-vendors.component";
//import { VendorService } from "src/app/vendor/vendor.service";
//import { ProcurmentComponent } from "src/app/procurment/procurment.component";
import { ItemComponent } from "src/app/item/item.component";
import { ItemlistComponent } from "src/app/item/itemlist/itemlist.component";
import { InvoiceComponent } from "src/app/item/itemlist/invoice/invoice.component";
import { ItemlistService } from "src/app/item/itemlist/itemlist.service";
//import { ProcurmentService } from "src/app/procurment/procurment.service";
//import { ProlistComponent } from "src/app/prolist/prolist.component";
//import { ProlistService } from "src/app/prolist/prolist.service";
import { InvoiceService } from "src/app/item/itemlist/invoice/invoice.service";
import { SalemanagementService } from "src/app/salemanagement/salemanagement.service";
import { SalemanagementComponent } from "src/app/salemanagement/salemanagement.component";
import { ReturnComponent } from "src/app/return/return.component";
import { RefundComponent } from "src/app/refund/refund.component";
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {NgxPaginationModule} from 'ngx-pagination'
import { Topnavbar } from "./topnavbar/topnavbar.component";
import { appRoutes } from "./app.routes";
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import {PaymentvocherComponent} from 'src/app/paymentvocher/paymentvocher.component';
//import { NurseComponent } from "src/app/nurse/nurse.component";
//import { NurseService } from "src/app/nurse/nurse.service";
//import { LabComponent } from "src/app/lab/lab.component";
//import { LabService } from "src/app/lab/lab.service";
//import { DoctorComponent } from "src/app/doctor/doctor.component";

//import { DoctorService } from "src/app/doctor/doctor.service";
//import { LabAdminComponent } from "src/app/lab-admin/lab-admin.component";
//import { LabAdminService } from "src/app/lab-admin/lab-admin.service";

          //import { ServicesComponent } from "src/app/services/services.component";
//import { ServicesService } from "src/app/services/services.service";

//import { ServiceslistComponent } from "src/app/serviceslist/serviceslist.component";
//import { ServiceslistService } from "src/app/serviceslist/serviceslist.service";
//import { BillComponent } from "src/app/bill/bill.component";
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
// import { httpInterceptorProviders } from './services/http-interceptor';
import { AuthInterceptor } from './services/http-interceptor/auth-interceptor';
//import { PatientlistComponent } from "src/app/patientlist/patientlist.component";
//import { LabresultComponent } from "src/app/labresult/labresult.component";
//import { ReportComponent } from './report/report.component';
//import { OutpatientlistComponent } from './outpatientlist/outpatientlist.component';

import { OrderModule } from 'ngx-order-pipe';
import { PaymentvocherService } from './paymentvocher/paymentvocher.service';
import {MarblesComponent} from 'src/app/marbles/marbles.component';
import { MarblesService } from './marbles/marbles.service';
import {QuartzComponent} from 'src/app/quartz/quartz.component';
import{GraphitesComponent} from 'src/app/graphites/graphites.component';
import { QuartzService } from './quartz/quartz.service';
import { GraphitesService } from './graphites/graphites.service';
import {OrderComponent} from 'src/app/order/order.component';
import {OrderService} from 'src/app/order/order.service';
import {MonumentsComponent} from 'src/app/monuments/monuments.component';
import {MonumentsService} from 'src/app/monuments/monuments.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {ItembalanceComponent} from 'src/app/itembalance/itembalance.component';
import {ItembalanceService} from 'src/app/itembalance/itembalance.service';
import {InvoicelistComponent} from 'src/app/invoicelist/invoicelist.component';
import {InvoicelistService} from 'src/app/invoicelist/invoicelist.service';
import {SalelistComponent} from 'src/app/salelist/salelist.component';
import {SalelistService} from 'src/app/salelist/salelist.service';
import {InvoicesComponent} from 'src/app/invoices/invoices.component';
import {InvoicesService} from 'src/app/invoices/invoices.service';
import {PaymentvocherlistComponent} from 'src/app/paymentvocherlist/paymentvocherlist.component';
import {PaymentvocherlistService} from 'src/app/paymentvocherlist/paymentvocherlist.service';
import {HemaComponent} from 'src/app/hema/hema.component';
import {HemaService} from 'src/app/hema/hema.service';
import {SalereportComponent} from 'src/app/salereport/salereport.component';
import {SalereportService} from 'src/app/salereport/salereport.service';
import {DlistComponent} from 'src/app/dlist/dlist.component';
import {DlistService} from 'src/app/dlist/dlist.service';
import{WeeklyreportComponent} from 'src/app/weeklyreport/weeklyreport.component';
import {WeeklyreportService} from 'src/app/weeklyreport/weeklyreport.service';
import {TagsalesComponent} from 'src/app/tagsales/tagsales.component';
import {TagsalesService} from 'src/app/tagsales/tagsales.service';
import {SalesComponent} from 'src/app/sales/sales.component';
import{SalesService} from 'src/app/sales/sales.service';
import {SaleeditComponent} from 'src/app/saleedit/saleedit.component';
import {SaleeditService} from 'src/app/saleedit/saleedit.service';
import {AcceptpaymentsComponent} from 'src/app/acceptpayments/acceptpayments.component';
import {AcceptpaymentsService} from 'src/app/acceptpayments/acceptpayments.service';
import {WeeklypayComponent} from 'src/app/weeklypay/weeklypay.component';
import{WeeklypayService} from 'src/app/weeklypay/weeklypay.service';
//import { ItembalanceComponent } from './itembalance/itembalance.component';
//import { AmbulanceComponent } from 'src/app/ambulance/ambulance.component';

//import { AmbulancelistComponent } from 'src/app/ambulancelist/ambulancelist.component';
//import { AmbulanceService } from 'src/app/ambulance/ambulance.service';
//import { AmbulancelistService } from 'src/app/ambulancelist/ambulancelist.service';


@NgModule({
  declarations: [
    // AmbulanceComponent,
    // AmbulancelistComponent,
    // ReportComponent,
    MonumentsComponent,
    WeeklyreportComponent,
    LoginComponent,
    // ServicesComponent,
    // ServiceslistComponent,
    DashboardComponent,  
    AppComponent,
    PaymentvocherComponent,
    SaleeditComponent,
    // LabComponent,
    // NurseComponent,
    // DoctorComponent,
    // LabAdminComponent,
    Navigation,
    Topnavbar,
     ReturnComponent,
     InvoiceComponent,
     WeeklypayComponent,
     AcceptpaymentsComponent,
     InvoicesComponent,
     OrderComponent,
     TagsalesComponent,
     SalereportComponent,
     SalesComponent,
     PaymentvocherlistComponent,
    // RegistrationComponent,
    // ExistVendorsComponent,
    // LabresultComponent,
     ItemlistComponent,
     MarblesComponent,
     ItembalanceComponent,
    // ProlistComponent,
    // ExistingComponent,
 UserComponent,
 InvoicelistComponent,
 UserExistComponent ,
// VendorComponent,
// ProcurmentComponent,
 ItemComponent,
 SalemanagementComponent,
 SalelistComponent,
 QuartzComponent,
 GraphitesComponent,
 HemaComponent,
 RefundComponent,
 ItembalanceComponent,
 DlistComponent,
// BillComponent,
// PatientlistComponent,
// OutpatientlistComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    OrderModule,
    NgSelectModule,
    NgxLoadingModule,
MatTooltipModule,
NgxSpinnerModule,
SelectDropDownModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
Ng2SearchPipeModule,
NgxPaginationModule,
    CommonModule,
FormsModule,
MatCheckboxModule,
   MatNativeDateModule,
    MatGridListModule,
    MatDatepickerModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    // LoadingModule,
    LoadingBarModule,
    MatPaginatorModule,
    MatTableModule,MatSortModule,
    LoadingBarHttpClientModule,
MatCardModule,
MatRadioModule,
AngularFileUploaderModule,
NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
 NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
    
  ],
providers:

[ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  Navigation,
  AuthenticationService,
  AlertService,
  MonumentsService,
  // NurseService,
  // LabService,
  // DoctorService,
  // LabAdminService,
  // RegisterService,
  // VendorService,
   ItemlistService,
   OrderService,
   SalereportService,
   SalesService,
   InvoicesService,
   TagsalesService,
   AcceptpaymentsService,
   WeeklypayService,
  // ProcurmentService,
  // ProlistService,
   InvoiceService,
   InvoicelistService,
   SalelistService,
   SalemanagementService,
   PaymentvocherService,
   MarblesService,
   QuartzService,
   SaleeditService,
   HemaService,
   GraphitesService,
   PaymentvocherlistService,
   ItembalanceService,
   DlistService,
   WeeklyreportService
  // ServiceslistService,
  // ServicesService,
  // AmbulanceService,
  // AmbulancelistService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
