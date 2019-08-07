 import { UserExistComponent } from './user-exist/user-exist.component';

// import { RegistrationComponent } from './registration/registration.component';

// import { ExistingComponent } from './existing/existing.component';
 import { UserComponent } from "src/app/user/user.component";
// import { ExistVendorsComponent } from "src/app/exist-vendors/exist-vendors.component";

// import { ProcurmentComponent } from "src/app/procurment/procurment.component";
 import { ItemComponent } from "src/app/item/item.component";
 import { ItemlistComponent } from "src/app/item/itemlist/itemlist.component";
 import { InvoiceComponent } from "src/app/item/itemlist/invoice/invoice.component";
 import {InvoicelistComponent} from 'src/app/invoicelist/invoicelist.component';
 import {InvoicelistService} from 'src/app/invoicelist/invoicelist.service';
// import { ProlistComponent } from "src/app/prolist/prolist.component";
 import { SalemanagementComponent } from 'src/app/salemanagement/salemanagement.component';
 import {PaymentvocherComponent} from 'src/app/paymentvocher/paymentvocher.component';
 import {MarblesComponent} from 'src/app/marbles/marbles.component';
import {QuartzComponent} from 'src/app/quartz/quartz.component';
import{GraphitesComponent} from 'src/app/graphites/graphites.component';
 import { ReturnComponent } from "src/app/return/return.component";
 import { RefundComponent } from "src/app/refund/refund.component";
// import { VendorComponent } from "src/app/vendor/vendor.component";
import { DashboardComponent } from './dashboard/dashboard.component';
// import { NurseComponent } from './nurse/nurse.component';
// import { LabComponent } from "src/app/lab/lab.component";

// import { DoctorComponent } from "src/app/doctor/doctor.component";
// import { LabAdminComponent } from "src/app/lab-admin/lab-admin.component";

// import { ServicesComponent } from "src/app/services/services.component";
// import { ServicesService } from "src/app/services/services.service";

// import { ServiceslistComponent } from "src/app/serviceslist/serviceslist.component";
// import { ServiceslistService } from "src/app/serviceslist/serviceslist.service";
// import { BillComponent } from "src/app/bill/bill.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {OrderComponent} from 'src/app/order/order.component';
import {OrderService} from 'src/app/order/order.service';
import {MonumentsComponent} from 'src/app/monuments/monuments.component';
import {MonumentsService} from 'src/app/monuments/monuments.service';
import {SalelistComponent} from 'src/app/salelist/salelist.component';
import {SalelistService} from 'src/app/salelist/salelist.service';
import {InvoicesComponent} from 'src/app/invoices/invoices.component';
import {InvoicesService} from 'src/app/invoices/invoices.service';
import {PaymentvocherlistComponent} from 'src/app/paymentvocherlist/paymentvocherlist.component';
import {PaymentvocherlistService} from 'src/app/paymentvocherlist/paymentvocherlist.service';
import {HemaComponent} from 'src/app/hema/hema.component';
import {HemaService} from 'src/app/hema/hema.service';
import {ItembalanceComponent} from 'src/app/itembalance/itembalance.component';
import {ItembalanceService} from 'src/app/itembalance/itembalance.service';
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
// import { PatientlistComponent } from "src/app/patientlist/patientlist.component";
// import { LabresultComponent } from "src/app/labresult/labresult.component";
// import { ReportComponent } from './report/report.component';
// import { OutpatientlistComponent } from './outpatientlist/outpatientlist.component';
// import { AmbulanceComponent } from 'src/app/ambulance/ambulance.component';
// import { AmbulancelistComponent } from 'src/app/ambulancelist/ambulancelist.component';
// import { AmbulanceService } from 'src/app/ambulance/ambulance.service';
// import { AmbulancelistService } from 'src/app/ambulancelist/ambulancelist.service';
export const appRoutes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
    // { path: 'register', component: RegistrationComponent, canActivate: [AuthGuard] },
 
    // { path: 'existing', component: ExistingComponent, canActivate: [AuthGuard] },
     { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
     { path: 'userreg', component: UserExistComponent, canActivate: [AuthGuard] },
    // { path: 'vendor', component: VendorComponent, canActivate: [AuthGuard] },
    // { path: 'existvendor', component: ExistVendorsComponent, canActivate: [AuthGuard] },
    // { path: 'grn', component: ProcurmentComponent, canActivate: [AuthGuard] },
     { path: 'item', component: ItemComponent, canActivate: [AuthGuard] },
     {
         path: 'itemlist', component: ItemlistComponent, canActivate: [AuthGuard]
     },
     {
        path: 'acceptpayments', component: AcceptpaymentsComponent, canActivate: [AuthGuard]
    },
     {
        path: 'paymentvocher', component: PaymentvocherComponent, canActivate: [AuthGuard]
    },
    {
        path: 'paymentvocherlist', component: PaymentvocherlistComponent, canActivate: [AuthGuard]
    },
    {
        path: 'marbles', component: MarblesComponent, canActivate: [AuthGuard]
    },
    {
        path: 'weeklypay', component: WeeklypayComponent, canActivate: [AuthGuard]
    },
    {
        path: 'quartz', component: QuartzComponent, canActivate: [AuthGuard]
    },
    {
        path: 'graphites', component: GraphitesComponent, canActivate: [AuthGuard]
    },
     {
         path: 'invoice', component: InvoiceComponent, canActivate: [AuthGuard]
     },
     {
        path: 'invoicelist', component: InvoicelistComponent, canActivate: [AuthGuard]
    },
    // {
    //     path: 'proclist', component: ProlistComponent, canActivate: [AuthGuard]
    // },
     {
         path: 'sale', component: SalemanagementComponent, canActivate: [AuthGuard]
     },
     {
        path: 'salelist', component: SalelistComponent, canActivate: [AuthGuard]
    },

     {
        path: 'order', component: OrderComponent, canActivate: [AuthGuard]
    },
    {
        path: 'monuments', component: MonumentsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'itembalance', component: ItembalanceComponent, canActivate: [AuthGuard]
    },
   
    {
        path: 'salereport', component: SalereportComponent, canActivate: [AuthGuard]
    },
    {
        path: 'saleedit', component: SaleeditComponent, canActivate: [AuthGuard]
    },
   
    
     {
         path: 'return', component: ReturnComponent, canActivate: [AuthGuard]
     },
     {
        path: 'weeklyreport', component: WeeklyreportComponent, canActivate: [AuthGuard]
    },
     {
        path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard]
    },
     {
         path: 'refund', component: RefundComponent, canActivate: [AuthGuard]
 },
 {
    path: 'dlist', component: DlistComponent, canActivate: [AuthGuard]
},
{
    path: 'tagsales', component: TagsalesComponent, canActivate: [AuthGuard]
},
{
    path: 'sales', component: SalesComponent, canActivate: [AuthGuard]
},
    // {
    //     path: 'nurse', component: NurseComponent, canActivate: [AuthGuard]
    // },
    // {
    //     path: 'lab', component: LabComponent, canActivate: [AuthGuard]
    // },
    // {
    //     path: 'Labresult', component:LabresultComponent, canActivate: [AuthGuard]
    // },
    // {
    //     path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard]
    // },
    // {
    //     path: 'Labadm', component: LabAdminComponent, canActivate: [AuthGuard]
    // },
    // {
    //     path: 'services', component: ServicesComponent, canActivate: [AuthGuard]
    // },
    // {
    //     path: 'serviceslist', component: ServiceslistComponent, canActivate: [AuthGuard]
    // },
    // {
    //     path: 'bill', component: BillComponent, canActivate: [AuthGuard]
    // },
    // {
    //     path: 'patientlist', component: PatientlistComponent, canActivate: [AuthGuard]
     
    // },
    
    // {
    //     path: 'report', component: ReportComponent, canActivate: [AuthGuard]
     
    // },
    // {
    //     path: 'op', component: OutpatientlistComponent, canActivate: [AuthGuard]
     
    // },
    // {

    //     path: 'ambulance', component:AmbulanceComponent , canActivate: [AuthGuard]
    // },
    // {

    //     path: 'ambulancelist', component:AmbulancelistComponent , canActivate: [AuthGuard]
    // },
  
];