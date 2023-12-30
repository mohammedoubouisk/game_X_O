// let turn ='X';
// let title = document.querySelector('.title');
// let squares=[];
// function end(num1,num2,num3){
//     title.innerHTML = `${squares[num1]} winner`;
//     document.getElementById('item'+num1).style.background='black';
//     document.getElementById('item'+num2).style.background='black';
//     document.getElementById('item'+num3).style.background='black';

//     setInterval(function(){title.innerHTML += '.'},1000);
//     setTimeout(function(){location.reload()},4000)
// }
// function winner(){
//     for(let i=1 ; i<10 ; i++){
//        squares[i]=document.getElementById('item'+i).innerHTML;
//     }
//     if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1] != ''){
//         end(1,2,3);
//     }
//     else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[5] != ''){
//         end(4,5,6);
//     }
//     else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[8] != ''){
//         end(7,8,9);
//     }
//     else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1] != ''){
//         end(1,4,7);
//     }
//     else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2] != ''){
//         end(2,5,8);
//     }
//     else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[6] != ''){
//        end(3,6,9);
//     }
//     else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[5] != ''){
//        end(1,5,9);
//     }
//     else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[5] != ''){
//       end(3,5,7);
//     }
// }

// function game(id)
// {
//   let element = document.getElementById(id)
//   if(turn === 'X' && element.innerHTML == '')
//   {
//     element.innerHTML = 'X';
//     turn = 'O';
//     title.innerHTML='O';
//   }else if(turn==='O' && element.innerHTML==''){
//     element.innerHTML='O';
//     turn = 'X';
//     title.innerHTML='X';
//   }
//   winner();
// }


let turn = 'X';
let title = document.querySelector('.title');
let squares=[];

function end(a,b,c){
    title.innerHTML=`${squares[a]} winner`
    document.getElementById('item'+a).style.background='black';
    document.getElementById('item'+b).style.background='black';
    document.getElementById('item'+c).style.background='black';


setInterval(function(){title.innerHTML += '.'},1000);
setTimeout(function(){location.reload()},4000)

function relod(){
    if('item1'!='' && 'item2'!='' && 'item3'!='' && 'item4'!='' && 'item5'!='' && 'item6'!='' && 'item7'!='' && 'item8'!='' && 'item9'!=''){
      setInterval(function(){title.innerHTML += '.'},1000);
      setTimeout(function(){location,reload()},4000);
  }
}

}


function winner(){
  for(let i=1 ; i<10 ; i++){
      squares[i]=document.getElementById('item'+i).innerHTML;
  }
  if(squares[1]==squares[2] && squares[2]==squares[3] && squares[2] != ''){
    end(1,2,3)
  }
  else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[5] != ''){
    end(4,5,6)

  }
  else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[8] != ''){
    end(7,8,9)

  }
  else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[4] != ''){
    end(1,4,7)

  }
  else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[5] != ''){
    end(2,5,8)

  }
  else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[6] != ''){
    end(3,6,9)

  }
  else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1] != ''){
    end(1,5,9)

  }
  else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[5] != ''){
    end(3,5,7)

  }

}

function game(id)
{

  let element = document.getElementById(id);
  if(turn === 'X' && element.innerHTML == '')
  {
    element.innerHTML = 'X'
    turn = 'O'
    title.innerHTML='O'
  }
  else if(turn === 'O' && element.innerHTML == ''){
    element.innerHTML='O';
    turn ='X';
    title.innerHTML='X';
  }
  winner();
  relod();
  
}


// background color of page 

function setcolor(color){
 document.body.style.background = color;
}