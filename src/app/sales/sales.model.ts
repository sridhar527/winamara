export class SaleDetail {
    itemId: string;
    itemName:string;
    productName:string;
    discount:number=0;
    amount: number;
    saleArea:number;
    balance:number;
   // saleArea: number;
    sellingPrice:string;
    thickness:number;
    originRefNo:string;
    length:number;
    height:number;
    dimension:string = "cm";
    availableareaperSqm:number;
    availableareaperCubic:number;
    sellingDimension:string = "Sqm";
    refChildSales: string[];
    currency:string = "Euro";
    // ToDo : remove before sending to API
    saleQuantity?: number;
    childList?: string[];
    itemsList?: string[];
    spperArea:number;
    spperPcs:number;
    netAmount: number;
  itemsName: any;
 // totalAmount: number;

}

export class NewSale { 
    vatNo:string;
    customerOrderNo:string;
    soldBy: string;
    paymentType: string;
    amount: number;
    customerName:string;
    address:string;
    mobileNo:string;
    emailId:string;
    soldDate=new Date();
    delivery:string;
    total: number;
    netAmount:number;
    refSales:SaleDetail[];
 
}


export class Medicine { 
    saleQuantity:number;
    saleArea: number;
    itemId:string;
    itemName:string;
    productName:string;
    originRefNo:string;
    childId:string;
    balance:number;
    sellingPrice:string;
    soldDate:string;
    childList:string;
    itemsList:string;
    constructor(  childList:string,saleArea:number,itemId:string,  originRefNo:string,itemsList:string,itemName:string,productName:string, childId:string,soldDate:string,  saleQuantity:number,balance:number,sellingPrice:string) { 
      this.balance=balance;
        this.saleQuantity=saleQuantity;
       this.itemId = itemId;
       this.itemsList=itemsList;
       this.productName=productName;
       this.childId=childId;
       this.originRefNo=originRefNo;
      this.itemName=itemName;
       this.sellingPrice=sellingPrice;
       this.soldDate=soldDate;
       this.childList=childList
    }
}

