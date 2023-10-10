console.log("TypeScript Day 1 Homework")

/* 
Question #1

Create a type to represent the following instances of 
›`CTStudent` Also declare three 3 students below as type 
`CTStudent` and set their values 

let student1 = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3 = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}  */console.log('Question 1')

type CTStudent={
    id:string,
    name:string
    age:number,
    isTired:boolean,
    projectsCompleted:string[]
    pet?:string
}


/* Question #2

Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`. 
If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` 
be sure to annoate the return type of the function  */
console.log('Question 2')

type Fruit={
  color:string,
  shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit|null=null

function fruitColor(fruit: Fruit|null):void{
    if (fruit){
        console.log(fruit.color)
    } else {
        console.log(`You ate my fruit already`)
    }
} 

fruitColor(eaten)



/* 
Question #3

Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union 
type */
console.log('Question 3')

type Book={
    isbn:string,
    title:string,
    author:string
  }
  
type DigitalBook={
    fileType:string,
}
  
type Ebook = Book | DigitalBook

let ebook1: Ebook = {
    isbn: 'bookid',
    title: 'home',
    author:'Whittney Hanson',
    fileType: 'pdf'
}
console.log(ebook1)


/* 
Question #4

Create a Type to represent a `ShopItem` that will fit the following rules. 
You may need to create additional structures

- All ShopItems have an numeric id that can not be edited 
- All ShopItems have a price
- All ShopItems have a description
- Some ShopItems have a color
- All ShopItems have a Category represented with an enum 
    - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
- All ShopItems have a list of keywords used to help search for the ShopItem 
    - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", 
    "Tony Stark"]

After Creating the `ShopItem` type create 3 items using this type */ 
console.log('Question 4')

type ShopItem={
    readonly id:number,
    price:number,
    desc:string, 
    keywords:string[]
    catagory:Catagories
}
enum Catagories{
    shirt = 'Shirts',
    shoe = 'Shoes',
    pants = 'Pants',
    hat = 'Hats'
}

const shoeItem: ShopItem = {
    id: 2,
    price: 150.00,
    desc: 'Air Jordans but better',
    keywords: ['sneakers', 'quality', 'basketball'],
    catagory:Catagories.shoe
}
  
const shirtItem: ShopItem = {
    id: 1,
    price: 10.00,
    desc: 'comfortable, breathable, fit for any occasion tshirts',
    keywords: ['tshirt', 'comfort', 'fashion'],
    catagory:Catagories.shirt
}

const pantsItem: ShopItem = {
    id: 5,
    price: 20.00,
    desc: 'made with real denim',
    keywords: ['jeans', 'work clothes', 'cargo pants'],
    catagory:Catagories.pants
}
console.log(shoeItem, shirtItem,pantsItem)