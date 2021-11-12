export class ProductDeal {
    constructor(
        public id:number, 
        public name: string, 
        public pricesale: number, 
        public priceoff: number, 
        public imgUrl: string[],
        public qty: number,
        ){

    }
}
