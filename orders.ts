export type Order ={
    id : number;
    itemName : string;
    quantity : any;
    dateOfOrder : Date;
    customerName : string;
    customerAddress :{
        doorNumber : any,
        streetName : string,
        city : string,
        state : string,
        zipCode : any
    }
    customerEmail : string
    customerPhone : any
    totalAmount : any
}