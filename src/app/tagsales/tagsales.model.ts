export class BillDetail { 
    billNo: string;
}
export class TagSlab{
    slabNo: string;
    newSlabNo:string;
    constructor( slabNo: string,newSlabNo:string) { 
        this.slabNo= slabNo;
        this.newSlabNo= newSlabNo;
        }
}