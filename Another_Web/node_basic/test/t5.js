// 객체를 for로 돌리면?
let obj = {
    name:'1',
    age:'2'
}
for( v in obj ){
    console.log( '맴버변수명:', v, '맴버변수값:', obj[v] )
}