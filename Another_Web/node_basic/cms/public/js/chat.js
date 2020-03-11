// 클라이언트 사이드에서 채팅을 주도하는 메인 코드
// 주된 표현은 jQuery를 이용하여 처리하겟다
// 1. 서버와 연결을 수행, 결과로 소켓을 하나 리턴한다
const socket = io.connect('http://localhost:3000')
// 사용자 이름을 전역변수로 관리
let user_name = null
// 2. 서버와 연결됬음을 이벤트로 받아서 사용자 정보를 전송하는 이벤트발동
// 'connect' :  사전에 미리 정의된 이벤트명이다
socket.on('connect', ()=>{
    user_name = prompt('닉네임을 입력하세요')
    // 이름은 무조건 넣는다고 치고 코드를 진행하겟다
    console.log( user_name )
    // 이름을 서버로 전송 -> 이벤트를 새로 정의한다 -> 현재 
    // 시스템에서만 존재하는 이벤트명 : s_xxx, 이벤트발생  emit()
    // 이벤트를 발생시킨다 == 데이터를 전송한다 (이 시스템에서는)
    // emit() 2번 인자부터는 가변인자 => 보내고 싶은 만큼 알아서 첨부
    socket.emit('s_send_user_name', user_name, new Date())
})
// 3. 서버가 메시지를 보낸다 -> 화면처리
socket.on('c_send_msg', (sender, msg, date)=>{
    console.log( sender, msg, date )
    // 서버가 보낸 내용은 왼쪽으로 메시지가 노출된다
    let msg_html = `
    <div class="direct-chat-msg">
        <div class="direct-chat-info clearfix">
            <span class="direct-chat-name float-left">${sender}</span>
            <span class="direct-chat-timestamp float-right">${date}</span>
        </div>
        <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image">        
        <div class="direct-chat-text">
            ${msg}
        </div>        
    </div>
    `

    let my_msg_html = `<div class="direct-chat-msg right">
    <div class="direct-chat-info clearfix">
      <span class="direct-chat-name pull-right"></span>
      <span class="direct-chat-timestamp pull-left">${date}</span>
    </div>    
    <img class="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image">    
    <div class="direct-chat-text">
        ${msg}
    </div>
    </div>`

    // 채팅창을 찾아서, 메세지를 추가한다
    // 남이 보낸 메시지는 msg_html 추가
    // 내가 보낸 메시지는 my_msg_html
    $('.direct-chat-messages').append( sender === user_name ? my_msg_html : msg_html )
    //$('.direct-chat-messages').scrollBy(0,1000)

})
// 2-1. 방정보가 내려왔다
socket.on('c_send_roominfo', (rooms, myRoom)=>{
    console.log( rooms, myRoom )
    // 1. 기존의 방정보 화면을 삭제(방정보가진 요소를 특정하요 자식제거)
    $('#myRoomInfo').empty()    
    // 2. 방목록을 반복하면서 방정보 세팅 -> 추가해라
    $.each( rooms, (idx,room)=>{
        let html = `<span data-toggle="tooltip" title="" class="badge badge-primary">${room}</span>\n`
        $('#myRoomInfo').append( html )
        // 3. 내방일 경우는 css를 다르게 적용, title 속성값 세팅
        if ( room === myRoom) {
            $('#myRoomInfo>span:last').attr('title','내방')
            $('#myRoomInfo>span:last').removeClass('badge-primary')
            $('#myRoomInfo>span:last').addClass('badge-pill')
        }else{
            // 방바꾸기 이벤트 설정
            $('#myRoomInfo>span:last').on('click', ()=>{
                socket.emit('s_send_roomChange', room)
                // 기존 채팅내용을 초기화
                $('.direct-chat-messages').empty()
            })
        }
    } )
    
})
// 5. 메세지 작성후 send  버튼을 누르면 서버로 전송->서버는 방송->화면갱신
$('#sendBtn').on('click', ()=>{
    sendMsg()
})
// 5-1. 메시지 작성후 이번에는 엔터키를 눌러서 서버로 메시지 전송
// 입력창에 입력후, 엔터키를 누르면(keypress), 전송
$('[name=message]').on('keypress', (evt)=>{
    // 엔터키에 대한 이벤트는 둘중 하나만 잡으면된다 
    console.log( evt.key, evt.keyCode )
    //if( evt.keyCode == 13) { 
    if( evt.key === 'Enter'){
        sendMsg()   
    }
})
function sendMsg()
{
    let msg = $('[name=message]').val() // input 태그에서 입력값 획득할때 사용하는함수
    // 서버쪽 소켓에 사용자 이름이 세팅되어 있으므로 보낼 필요없다
    socket.emit('s_send_msg', msg) 
    // 입력창 초기화
    $('[name=message]').val('') 
}
