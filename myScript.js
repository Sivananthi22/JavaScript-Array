// CREATE AN ARRAY

// const flowers=["Rose","Jasmine","Shoeflower","Sunflower","Lotus"];
// console.log(flowers);

// const flowers2=new Array("Lily","Anthurium","Orchid","Lavendar","Dahlia");
// console.log(flowers2);

// const vehicles="Car,Bike,Lorry".split(",");
// console.log(vehicles);


// LENGTH OF ARRAY
// const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
// console.log(clothing.length);

// CREATE A STRING FROM AN ARRAY
// const colours = ["Red", "Black","Orange","White","Blue"];
// const coloursString = colours.join(" , ");
// console.log(coloursString);

// ACCESS AN ARRAY ITEM BY IT'S INDEX
// const animals=["Lion","Tiger","Elephant","Monkey","Donkey","Fox"];
// console.log (animals[4]);

// let objArr = [
// 	{
// 		name: 'john',
// 		age: 12,
// 		gender: 'male'
// 	},
// 	{
// 		name: 'jane',
// 		age: 15,
// 		gender: 'female'
// 	},
// 	{
// 		name: 'julie',
// 		age: 20,
// 		gender: 'trans'
// 	}
// ];

// console.log(objArr[0].gender);

// CREATING AN EMPTY ARRAY AND APPENDING VALUES ACCORDING TO INDEX
// const modules=[];
// modules[0]="HTML";
// modules[1]="CSS";
// modules[100]="React";
// console.log(modules);


// FIND THE INDEX OF AN ITEM IN AN ARRAY
// const fruits=["Apple","Orange","Grapes","Pineapple","Wood Apple"];
// console.log(fruits.indexOf("Orange"));
// console.log(fruits);


// CHECKS IF AN ARRAY CONTAINS A CERTAIN ITEM 
// const vegetables=["Potato","Carrot","Brinjal","Beetroot","Beans"];
// console.log(vegetables.includes("Carrot"));

// console.log(vegetables.indexOf("Beetroot") !== -1);

// console.log(vegetables.indexOf("Bitterguard") !== -1);

// APPEND AN ITEM TO AN ARRAY
// const colours=["Red","Blue","White","Black","Green"];
// const newLength= colours.push("Violet");
// colours.splice(1,1,'Orange');
// console.log(colours);

// const array3 = [1, 2, 3];
// console.log(array3.unshift(4, 5,));
// console.log(array3);



// REMOVE A SINGLE ITEM BY INDEX
// const flowers4=["Rose","Shoeflower","Sunflower","Lily","Anthurium","Jasmine"];
// const removedItem= flowers4.pop();
// console.log(flowers4);
// console.log(removedItem);


// const array1 = [1, 2, 3,4,5,6,7];
// const firstElement = array1.shift();
// console.log(array1);
// console.log(firstElement);


// REMOVE MULTIPLE ITEMS BY INDEX
// const numbers=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
// const start=1;
// const deleteCount=3;
// const removedItems=numbers.splice(start,deleteCount);
// console.log(numbers);
// console.log(removedItems);

// REPLACE MULTIPLE ITEMS IN AN ARRAY
// const birds=["Crow","Parrot","Peacock","Eagle","Hummingbirds","Penguins","Owls","Swallows"];
// const start=-2;
// const deleteCount=2;
// const removedItems=birds.splice(start,deleteCount,"Swans","Kingfisher");
// console.log(birds);
// console.log(removedItems);

// ARRAY PROTOTYPES
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());

// const arr = [];
// arr.push(1, [3, arr, 4], 2,7);
// console.log(arr);
// console.log(arr.join("/")); 

// FOREACH METHOD
// const numbers=[1,2,3,4,5,6,7];
// let sum=0;
// numbers.forEach(item=>{
//     sum += item;
// })
// console.log(sum);

// const letters=['a','b','a','b','c','d','a'];
// let count={};
// letters.forEach(item =>{
//     if(count[item]) {
//         count[item]++;
//     }else{
//         count[item]=1;
//     }
// })
// console.log(count);

// MAP METHOD
// const str= ['1','2','3','4','5','6'];
// const numbers =str.map(Number)
// console.log(numbers);

// FILTER METHOD
// const numbers =[1,2,3,4,5,6,7,8,9,10];
// const even = numbers.filter(isEven);
// function isEven(value){
//     return value % 2 === 0;
// }
// console.log(even);

// SLICE METHOD
// const participants =['Meera','John','Abhi','Sam','Jancy','Mary','Maria','Kavi'];
// const winners = participants.slice(0,3);
// console.log(participants);
// console.log(winners);

// CONCAT METHOD
// const a =[1,2,3];
// const b =[4,5,6];
// const c =[7,8,9];

// const z =a.concat(b,c);
// console.log(z);

// console.log(a);

// FLAT METHOD
// const arr=[1,[2,[3,[4,5,6,[7]]]]];
// const res= arr.flat(2);
// console.log(res);


// SORT METHOD
// const products=[
//     {
//         name:'pen',
//         price:40
//     },
//     {
//         name:'exercisebook',
//         price:200
//     },
//     {
//         name:'eraser',
//         price:20
//     }
// ];
//  products.sort((a,b) =>{
//     return b.price -a.price;
//  }
// );
//  console.log(products);

// TOSORTED Method
// const number=[2,35,63,78,52,152,30,45,852,642];
// const result=number.sort((a,b) => b-a)

// console.log(result,number);




