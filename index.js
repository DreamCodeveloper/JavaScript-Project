

document.querySelector('.clickMe1').addEventListener('click', ()=>{

  const colours = ['green','yellow','blue','red','orange','purple','white']
  const randomNumber =Math.floor(Math.random()*7);
  
  const randomColor = colours[randomNumber];

  // const a=document.querySelector('#output');
  // a.setAttribute('class',randomColor)

  document.getElementById('output1').style.backgroundColor=randomColor
}
);


const hex=[0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];

document.querySelector('.clickMe2').addEventListener('click', function(){


  let hexcolor='#';
  for(let i=0; i<6; i++){
    
    hexcolor += hex[number()];

  };

  document.getElementById('output2').style.backgroundColor=hexcolor;

})

function number(){
  return Math.floor(Math.random()*hex.length)
}

// Counter section ***************************


document.getElementById('incrimentbtn').addEventListener('click', function(){

  document.getElementById('counterNumber').style.color='green'

 let a = document.querySelector('#counterNumber').innerHTML

 let b =parseInt(a);

 let c=b+1;

 document.getElementById('counterNumber').innerHTML=c;

})

document.getElementById('decrementbtn').addEventListener('click', function(){

  document.getElementById('counterNumber').style.color='red'

  let a=document.getElementById('counterNumber').innerHTML;

  a=a-1;

  document.getElementById('counterNumber').innerHTML=a;

})

document.getElementById('resetbtn').addEventListener('click', function(){

  let a=document.getElementById('counterNumber').innerHTML;

  a=0;

  document.getElementById('counterNumber').innerHTML=a;
  document.getElementById('counterNumber').style.color='black'


})

