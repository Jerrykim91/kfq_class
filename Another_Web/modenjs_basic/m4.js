// for문, 인덱스증가,  for ~ in(for each)
// 자바스크림트의   for each는 좀 의미가 달랐다
// 표준에서 for ~ of가 추가되여 정확한 처리로 변경되었음
let list = [ 1,2,3,4 ] 

// 기존의 for each => 값을 순서대로 뽑는게 목적
for(let i in list){
    // 인덱스가 순서대로 나온다
    // 해서, 배열[인덱스]해서 값을 뽑아야만 했다
    console.log( i, list[i] )
}
// 모던 스크립트에서 개선되었다 -> of
for(let i of list){    
    console.log( i )
}