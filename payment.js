var x=new Date;

class Payment{
    constructor(){
        this.code = 0;
        this.date = x.getDay();
        this.sum = 0;
        this.description = "";
        this.status = "";
        this.paymentMethod = "";
        this.user = new User("","","");
    }
    paying()
    {
        payments.push(this)
    }

    refund(){
        this.Payments.array.forEach(element => {
            if(element.code == this.code)
            {
                Payments.splice(payments.indexOf(this),1);
            }
        });
    }
    updateSum(s){
        this.sum = s;
    }

    updateDescription(d){
        this.description = d;
    }

    updateUser(n,p,a){
        this.user = new User(n,p,a);
    }

}

class User{
    constructor(){
        this.name = "";
        this.phone = "";
        this.address = "";
    }
}

class PaymentOnCredit extends Payment{
    constructor(){
        super();
        this.recentLiterature = 0;
        this.validity = x.getDay();
        this.cvc = 0;
    }
    paying()
    {
        this.Payments.push(this)
    }
}

class clearingCompany extends Payment{
    constructor(){
        super();
        this.id = "";
    }
    paying()
    {
        this.Payments.push(this)
    }
}


p = new Payment();
p.code = 1;
p.date = "2022-06-02";
p.sum = 200;
p.description = "Debt repayment";
p.status = "yes";
p.paymentMethod = "credit";
p.user = new User();
p.user.name = "aaa";
p.user.phone = "052-1546789";
p.user.address = "street abc 15";

p1 = new PaymentOnCredit();
p1.code = 2;
p1.date = "2022-06-02";
p1.sum = 200;
p1.description = "Debt repayment";
p1.status = "yes";
p1.paymentMethod = "credit";
p1.user = new User();
p1.user.name = "aaa";
p1.user.phone = "052-1546789";
p1.user.address = "street abc 15";


payments = [p];
p1.paying();
p.refund();
// Payments.push(p);

// p.paying();

