export class CreditCard {
	number: string;
    cvc: string;
    expirationYear: string;
    expirationMonth: string;
    cardHolderName: string;
    type: string;

    constructor(data: any) {
        this.number = "**** **** **** " + data.lastFour;
        this.expirationYear = data.expirationYear;
        this.expirationMonth = data.expirationYear;
        this.cardHolderName = data.cardHolderName;
        this.type = data.type;
    }   

    exportTPaga(): any {
        var obj: any = {};
        obj.primaryAccountNumber = this.number;
        obj.cvc = this.cvc;
        obj.expirationYear = this.expirationYear;
        obj.expirationMonth = this.expirationMonth;
        obj.cardHolderName = this.number;
        return obj;
    }
    
}
