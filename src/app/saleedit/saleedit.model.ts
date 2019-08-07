export class SaleDetail { 
    itemName: string;
    productType:string;
    refChildSales:string;
    itemId:string;
    length:number;
    height:number;
    thickness:number;
    noOfPcs:number;
    dimension:string;
    sellingDimension:string;
    saleArea:number;
    currency:string;
    spperArea:number;
    netAmount:number;
    discount:number;
    amount:number;
    vat:number;
    constructor(productType:string ,itemName: string,itemId:string,refChildSales:string,
        dimension:string, sellingDimension:string,noOfPcs:number,
        length:number,height:number,thickness:number,
        saleArea: number,currency:string,spperArea:number,
         discount:number,amount:number,vat:number,netAmount:number) { 
        this.itemName = itemName;
        this.productType = productType;
        this.refChildSales = refChildSales;
        this.itemId = itemId;
        this.length = length;
        this.height = height;
        this.thickness = thickness;
        this.noOfPcs=noOfPcs;
        this.dimension=dimension;
        this.sellingDimension=sellingDimension;
        this.saleArea = saleArea;
        this.currency=currency;
        this.discount=discount;
        this.spperArea=spperArea;
        this.amount=amount;
        this.vat=vat;
        this.netAmount=netAmount;
    }
}

export class BillDetail { 
    billNo: string;
    customerName: string;
    address:string;
    customerOrderNo: string;
    mobileNo: number;
    emailId:string;
    soldBy:string;
    vatNo:string;
    total: number;
    refSales:SaleDetail[]=[];
}
export class Mutliple{
    payType:string;
    netAmount:number;
    }
    