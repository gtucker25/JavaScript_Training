const menu={
  _meal:'',
  _price:0,
  set meal(mealToCheck){
    if(typeof mealToCheck === "string"){
      this._meal = mealToCheck;
      return this._meal;
    }
  },
  set price(priceToCheck){
    if(typeof priceToCheck === "number"){
      this._price = priceToCheck;
      return this._price;
    }
  },
  get todaysSpecial(){
    if(this._meal !=null && this._price!=null){
      return "Today's Special is "+this._meal+" for "+this._price+"!";
    }
    else{
      return
    }
  }
};

menu.meal="Spaghetti";
menu.price=14.99;

console.log(menu.todaysSpecial);

