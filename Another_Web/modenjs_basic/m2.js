// 문자열
// 기존 표기법 : " ... ", ' ... '(사용권장)
// 왜 2개인가? => 표현을 자유롭게 하기 위해
// 문자열 내부에 문자열 표식이 있어서 문제가 
// 있는 경우 대체 표현으로 사용
console.log( "I'm a boy" ) 
console.log( 'I\'m a boy' ) // 이스케이프문자 \기호
// 모던 추가 : 포멧팅때문에 등장한 ` ... `
// ` : 백틱
let subway_mora = '모라역'
let city = '부산'
let gu = '사상구'
// 기존 방식
// 주소를 표시하시오
console.log(  city + gu + subway_mora )
console.log(  city + " " + gu + " " + subway_mora )
// 신규방식 -> 포멧팅
// 백틱으로 열고 사이사이에 ${변수명} 삽입해서 문자열완성
console.log(  `${city} ${gu} ${subway_mora}` )

// 여러줄 문자열 ` .. `
let str = `
류현진의 평균자책점 부문을 위협하던 ‘무서운 신인’ 마이크 소로카(애틀랜타)가 투구에 맞아 조기 교체되는 불운이 발생했다.

소로카는 24일(한국시각) 내셔널스 파크에서 열린 ‘2019 메이저리그’ 워싱턴과의 원정경기에 선발 등판했으나 2이닝(무실점)만 소화한 뒤 교체됐다.

3회초 타석에 들어선 소로카는 상대 선발 오스틴 보스의 시속 150km 직구가 오른쪽 팔뚝을 강타해 1루로 걸어나갔다. 맞았을 당시 이렇다 할 고통을 표현하지 않았던 터라 별다른 이상 없이 넘어가는 듯 했으나 애틀랜타 코칭스태프는 투수 보호를 위해 조기 교체를 결정했다.

소로카는 2점대 평균자책점으로 류현진(1.27)에 이어 내셔널리그 평균자책점 부문 2위에 올라있는 신인 투수다. 이날 2이닝 무실점으로 2.12였던 평균자책점을 2.07로 떨어뜨렸으나 소화 이닝(78.1이닝)이 부족해 조만간 순위에서 빠질 전망이다. 

류현진이 굳건히 평균자책 부문 선두를 달리면서 동양인 첫 사이영상 수상 가능성이 높아지는 상황이다.
`
console.log( str )