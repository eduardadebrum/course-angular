class Order {

    constructor(
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOptions: string,
        public orderItems : OrderItem [] = [] 
    ) {}
}

class OrderItem {

    constructor(public quantity: number, public menuId: String){}
}

export {Order, OrderItem}