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
