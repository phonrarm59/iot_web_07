//function คือ การทำงานหนึ่งๆ จะไม่ทำงานหากไม่ถูกเรียกใช้
//1. no parameter no return
function sayHello() {
    console.log("hello world");
    console.log("hello girl");
}
//2. have parameter no return
function sumNumber(n1 , n2 , n3) {
    console.log(`${n1} + ${n2} + ${n3} = ${n1 + n2 + n3}`); 
    console.log(555);
}
//3. no parameter has return
function showName() {
    console.log("เธอสบายดีมั้ย,,,,");
    return "wow wow wow";
}
//4.have parameter has return
function showSong(songName){
    return `${songName} นายแน่มาก ^^`
}

//เรียกใช้function
sayHello()
sayHello()
sumNumber(10,20,30) //ข้อมูลที่ส่งให้พารามิเตอร์เรีกว่า อาร์คิวเม้นต์

let result = showName()
console.log(result)

console.log(showSong("เนเน่"))