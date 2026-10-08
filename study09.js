//callback function
//คือการเขียน anonymous function / arrow function 
//ให้เป็รอาร์กิาเม้นส่งให้พารามิตอร์

function funcA(x, y ,z){
    console.log(`hello ${x}`);
    console.log(`hi ${y}`);
    z()
}

function funcB(data){
    let result = 10 * 20
    console.log(`value is ${data(result,100)}`);
}

funcA('sau','somjai',function(){
    console.log(`goobye`);
})

funcB((a,b) =>{
    return a * b * 10
})