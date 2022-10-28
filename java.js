//1ci
const sentece =['Lala','is','good','girl'];
function reverseArray(){
    let arr=sentece.reverse();
    return arr
}
console.log(reverseArray(sentece));

//2ci
const aliens = ['Blorgous','Glamyx','Wegord','SpaceKing'];

function greetAliens(aliens){
    console.log(`oh powerful ${aliens[0]},we humans offe our unconditional surrender!`)
    console.log(`oh powerful ${aliens[1]},we humans offe our unconditional surrender!`)
     console.log(`oh powerful ${aliens[2]},we humans offe our unconditional surrender!`)
    console.log(`oh powerful ${aliens[3]},we humans offe our unconditional surrender!`)
}
greetAliens(aliens)
//3cu
const lali =[
    'goodgirl',
    'skateboards',
  'backwards hats',
  'my room',
  'temporary tattoos'

];
const humay =[
    'sweaters',
    'skateboards',
    'family-night',
    'my room',
  
];
function xatun(lali,humay){
    lali.forEach((item) => {
        humay.forEach((element)=>{
            if (item==element){
                console.log(item)
            }
        })
    });
}
xatun(lali,humay)
//4cu
const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant'},
    { name: 'bun', source: 'plant' }
  ];
  function  isTheDinnerVegan (arr){
    for (let i=0;i < arr.length;i++){
        if(arr[i].source !== 'meat'){
            return false
        }
        else {
            return true
        }
    }
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));