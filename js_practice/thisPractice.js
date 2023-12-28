class book
{
    constructor(id=0,name="default",price=0)
    {
        this.id= id;
        this.name=name;
        this.price=price;
        console.log(this);
    }

     showInfo() {
          
        console.log(`Book details \n ${this.id}}`,"id:",this.id);
        console.log('name:',this.name);
        console.log('price:',this.price);
        }
 
}
const book1 = new book()
book1.showInfo();
//console.log(this);