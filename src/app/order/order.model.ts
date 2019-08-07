export class SaleDetail { 
    itemName: string;
    productType:string;
    refChildSales:string;
    refnewchildsales:string;
    length:number;
    height:number;
    thickNess:number;
    noOfPcs:number;
    dimension:string;
    sellingDimension:string;
    soldAreaSqm:number;
    soldAreaCubic:number;
    netAmount:number;
    constructor(itemName: string,productType:string ,refChildSales:string,refnewchildsales:string,length:number,height:number,thickNess:number,noOfPcs:number,dimension:string,sellingDimension:string,soldAreaSqm: number,soldAreaCubic:number,netAmount:number) { 
        this.itemName = itemName;
        this.productType = productType;
        this.refChildSales = refChildSales;
        this.refnewchildsales = refnewchildsales;
        this.length = length;
        this.height = height;
        this.thickNess = thickNess;
        this.noOfPcs=noOfPcs;
        this.dimension=dimension;
        this.sellingDimension=sellingDimension;
        this.soldAreaSqm = soldAreaSqm;
        this.soldAreaCubic=soldAreaCubic;
        this.netAmount=netAmount;
    }
}

export class BillDetail { 
    billNo: string;
    customerName: string;
    address:string;
    vatNo:string;
    customerOrderNo: string;
    mobileNo: number;
    emailId:string;
    soldBy:string;
    refOrderDetails:SaleDetail[]=[];
}
