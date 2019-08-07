/**
 * Created by andrew.yang on 2/6/2017.
 */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';


@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})
export class Navigation implements OnInit {
    
    userPages:any = [];   
    subscription:any;
    private menuPages: object;
    constructor(private router: Router, private authenticationService: AuthenticationService) { 
        this.subscription = this.authenticationService.getRole().subscribe(role => { 
            setTimeout( () => this.userPages = this.menuPages[role], 0);
         });
        this.menuPages = { 
            "ADMIN":[                                
                {link:'./dashboard', name: ' Dashboard', icon:'fa fa-tachometer fa-lg'},

                // {link:'./ambulance', name:'Ambulance',icon:'fa fa-plus-square fa-lg'},
                // {link:'./ambulancelist', name:'Ambulance List',icon:'fa fa-plus-square fa-lg'},
                // {link:'./register', name: 'Patient Registration', icon:'fa fa-users fa-lg'},
                // {link:'./existing', name: 'Existing Patient', icon:'fa fa-user fa-lg'},
                // {link:'./patientlist', name: 'Inpatient List', icon:'fa fa-users fa-lg'},
                // {link:'./op', name: 'Outpatient List', icon:'fa fa-users fa-lg'},
                {link:'./user', name: ' User Registration', icon:'fa fa-user fa-lg'},
                {link:'./userreg', name: ' Existing Users', icon:'fa fa-users fa-lg'},

               // {link:'./vendor', name: 'Vendor Registration', icon:'fa fa-plus-circle fa-lg'},
               // {link:'./existvendor', name: 'Vendor List', icon:'fa fa-list-ol fa-lg'},
               // {link:'./grn', name: 'Grn Entry', icon:'fa fa-shopping-cart fa-lg'},
                {link:'./item', name: ' Item Entry', icon:'fa fa-info-circle fa-lg'},
                {link:'./itemlist',name: ' Item Details', icon:'fa fa-list fa-lg'},
                {link:'./itembalance',name: ' Item Balance', icon:'fa fa-info fa-lg'},

                // {link:'./invoice',name: ' Invoice Payments', icon:'fa fa-money fa-lg'},
                 //{link:'./invoicelist',name:' Invoice List',icon:'fa fa-money fa-lg'},

                // {link:'./proclist', name: 'Procurment Master List', icon:'fa fa-shopping-cart fa-lg'},
                 {link:'./sale', name: ' Sale Management', icon:'fa fa-line-chart fa-lg'},
                 {link:'./saleedit', name: ' Sale Edit', icon:'fa fa-edit fa-lg'},

                 {link:'./salelist',name:' Sale List',icon:'fa fa-file fa-lg'},
                 {link:'./tagsales',name:' Sales Tag',icon:'fa fa-tag fa-lg'},
                 {link:'./acceptpayments', name: ' Accept Payments', icon:'fa fa-money fa-lg'},
                 {link:'./salereport',name:' Stock Reports',icon:'fa fa-bar-chart fa-lg'},
                 {link:'./weeklyreport', name: ' Sales Reports', icon:'fa fa-pie-chart fa-lg'},
                 {link:'./weeklypay', name: ' Payment Reports', icon:'fa fa-pie-chart fa-lg'},

                 {link:'./paymentvocher',name:' Payment Voucher',icon:'fa fa-credit-card fa-lg'},
                 {link:'./paymentvocherlist',name:' Payment Voucher List',icon:'fa fa-money fa-lg'},
                 {link:'./order',name:' Delivery Details',icon:'fa fa-truck fa-lg'},
                 {link:'./dlist',name:' Delivery List',icon:'fa fa-truck fa-lg'},
                 {link:'./return', name: ' Return Management', icon:'fa fa-retweet fa-lg'},
                 {link:'./refund', name: ' Return Details', icon:'fa fa-repeat fa-lg'},
                 {link:'./sales', name: ' Dummy Delivery', icon:'fa fa-line-chart fa-lg'},

                // {link:'./refund', name: ' Refund', icon:'fa fa-repeat fa-lg'},
                // {link:'./hema',name:'Hema',icon:'fa fa-user fa-lg'},
                 //{link:'./invoices'},
                 {link:'./marbles'},
                 {link:'./quartz'},
                 {link:'./graphites'},
                 {link:'./monuments'},
                // {link:'./nurse', name: 'Nurse', icon:'fa fa-stethoscope fa-lg'},
                // {link:'./doctor', name: 'Doctor', icon:'fa fa-user-md fa-lg'},
                // {link:'./lab', name: 'Lab', icon:'fa fa-flask fa-lg'},
                // {link:'./Labadm', name: 'Lab Admin', icon:'fa fa-lock fa-lg'},
                // {link:'./services', name: 'Services', icon:'fa fa-cogs fa-lg'},
                // {link:'./serviceslist', name: 'Services List', icon:'fa fa-list-ul fa-lg'},
                // {link:'./bill', name: 'Billing', icon:'fa fa-credit-card fa-lg'},
                // {link:'./report', name: 'Report', icon:'fa fa-credit-card fa-lg'},
                
              
            ],
            
        //     "DOCTOR":[{link:'./doctor', name: 'Doctor', icon:'fa fa-user-md fa-lg'}],
        //     "NURSE":[{link:'./nurse', name: 'Nurse', icon:'fa fa-stethoscope fa-lg'}],
        //     "EMPLOYEE":[{link:'./register', name: 'Patient Registration', icon:'fa fa-users fa-lg'}],
        //     "Lab":[{link:'./lab', name: 'Lab', icon:'fa fa-flask fa-lg'},
        //         {link:'./Labadm', name: 'Lab Admin', icon:'fa fa-lock fa-lg'},
        //     {link:'./services', name: 'Services', icon:'fa fa-cogs fa-lg'},
        //     {link:'./serviceslist', name: 'Services List', icon:'fa fa-list-ul fa-lg'},
        // ],
            // "Front Office":[ {link:'./dashboard', name: 'Dashboard', icon:'fa fa-tachometer fa-lg'},
            // {link:'./register', name: 'Patient Registration', icon:'fa fa-users fa-lg'},
            // {link:'./patientlist', name: 'Patientlist', icon:'fa fa-users fa-lg'},
            // {link:'./bill', name: 'Billing', icon:'fa fa-credit-card fa-lg'}],


            // "Pharmacy":[ {link:'./vendor', name: 'Vendor Registration', icon:'fa fa-plus-circle fa-lg'},
            // {link:'./existvendor', name: 'Vendor List', icon:'fa fa-list-ol fa-lg'},
            // {link:'./item', name: 'Item Master', icon:'fa fa-info-circle fa-lg'},
            // {link:'./itemlist', name: 'Item List', icon:'fa fa-money fa-lg'},
            // {link:'./grn', name: 'Procurment Details', icon:'fa fa-shopping-cart fa-lg'},
            // {link:'./proclist', name: 'Procurment Master List', icon:'fa fa-shopping-cart fa-lg'},
            // {link:'./sale', name: 'Sale Management', icon:'fa fa-line-chart fa-lg'},
            // {link:'./return', name: 'Return Management', icon:'fa fa-retweet fa-lg'},
            // {link:'./refund', name: 'Refund', icon:'fa fa-repeat fa-lg'}
            // ]
        }

    }
    
    ngOnInit() { 
        
    }

    getNavigationPages(userRole: string) { 
        return this.menuPages[userRole];
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    
}