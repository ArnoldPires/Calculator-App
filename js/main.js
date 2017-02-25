function run(num)
{
document.cal.result.value +=num;
}

function runplus()
{
document.cal.result.value += "+";
}
function runmult()
{
document.cal.result.value += "*";
}
function rundiv()
{
document.cal.result.value += "/";
}
function evalu()
{
var evalo = eval(document.cal.result.value)
document.cal.result.value = evalo;
}

// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
