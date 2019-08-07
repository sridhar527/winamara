export class SaleDetail { 
    saleNo:string;
    productType: string;
    itemName:string;
    refreturnChildSales:string[]
    childitemId:string;
    length:number;
    height:number;
    thickness:number;
    currency:string;
    sellingDimension:string;
    spperArea:number;
    spperPcs:number;
    quantity: number;
    returnPcs:number;
    soldAreaSqm:number;
    returnSqm:number;
    soldAreaCubic:number;
    returnCubic:number;
    discount: number=0;
    vat: number;
    returnAmount: number;
    refChildSales:string[]
    constructor(saleNo:string,productType: string,itemName:string,refreturnChildSales:string[], 
        childitemId: string,length:number,height:number,thickness:number,currency:string,sellingDimension:string,
        spperArea:number,spperPcs:number, quantity: number,returnPcs:number,
        soldAreaSqm: number,returnSqm:number,soldAreaCubic:number,returnCubic:number,
        discount: number,  vat: number,  returnAmount: number) { 
        this.saleNo = saleNo;
        this.productType = productType;
        this.itemName = itemName;
        this.refreturnChildSales=refreturnChildSales;
        this.childitemId = childitemId;
        this.length = length;
        this.height =height;
        this.thickness=thickness;
        this.currency=currency;
        this.sellingDimension=sellingDimension;
        this.spperArea=spperArea;
        this.spperPcs=spperPcs;
        this.quantity = quantity;
        this.returnPcs =returnPcs;
        this.soldAreaSqm = soldAreaSqm;
        this.returnSqm = returnSqm;
        this.soldAreaCubic=soldAreaCubic;
        this.returnCubic=returnCubic;
        this.discount = discount;
        this.vat = vat;
        this.returnAmount = returnAmount;
    }
}

export class BillDetail { 
    billNo: string;
    Date: string;
    customerName: string; 
    customerOrderno: string;
    mobileNo: number;
    vatNo:string;
    address:string;
    paymentType:string;
    totalround: number;
    total:any;
   
}
