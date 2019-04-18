//filtert + reduce


'use strict';

//define a function called omit, that takes an object,
// and a prop to filter and returns an object

const allCards= {
 
  'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
  'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
  'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
  'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
  'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
  'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
  'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
  'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
  'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
  'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
  'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
  'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
  'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
}


function omit(obj,omitted){

 return Object.keys(obj).filter(key=> !omitted.includes(key)).reduce( 
  (accum,key) =>{
    accum[key] = obj[key];
    return accum;
  },
  {})
}




const list= [
  {id: 4, a: 34},
  {id: 1, a: 34},
  {id: 5, a: 34}
]

const selectedItem = list.find(item=> item.id === 4);
const selectedIndex = list.findIndex(item=> item.id === 4);

const newItem = {...selectedItem, a:25}




const newList = [...list.slice(0, selectedIndex), newItem,...list.slice(selectedIndex+1) ]

console.log(newList)
console.log(list)

const newList = list.find(item=> item.id === id-1).