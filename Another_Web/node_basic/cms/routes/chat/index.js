// 서버에서 관리하는 기본방 3개
// 사용자가 접속하면 무조건 KNN에 입장
const rooms = ['MBC','tvN','KNN']
exports.createChatServer = (server)=>{
    // 서버객체에서 서버소켓을 획득하여 이벤트를 감지하는 객체 반환
    // 소켓통신은 서버소켓 <-> 소켓(클라이언트) 간에 1:1로 스트림을 열려서 데이터를 
    // 주고 받는 통신 방식이다
    // 서버소켓은 클라이언트가 접속하면 소켓을 하나 생성해서 반환
    // 통신은 소켓과 소켓이 서로 데이터를 주고받는 행위 => TCP/IP 기반 네트워크 프로그램 기초
    const io = require('socket.io')( server )
    // 이벤트를 등록해서 접속 대기
    io.on( 'connection', ( socket )=>{
        console.log('클라이언트가 하나 붙었다')
        // 1. 서버가 클라이언트가보내는 이름을 받으면
        socket.on('s_send_user_name', (user_name, date)=>{
            console.log(user_name, date)
            // 1. 접속한 유저 정보 기록 : 닉네임, 방이름
            socket.user_name = user_name
            socket.room      = rooms[2] // 임의설정
            // 2. 해당방(기본 KNN)에 조인
            socket.join( socket.room )
            // 3. 기존방에 있는 맴버들 방송(나를 제외)
            socket.broadcast.to( socket.room )
            .emit('c_send_msg', '관리자', `${socket.user_name}님이 입장하였습니다.`, new Date())
            // 4. 조인한 유저한테도 방송(다른 문구)
            socket.emit('c_send_msg', '관리자', 
            `${socket.user_name}님 환영합니다.`, new Date())            
            // 5. 현재 서버의 방정보 전송
            socket.emit('c_send_roominfo',rooms, socket.room)
        })
        // 2. 클라이언트가 메시지를 보내면
        //    같은방에 있는 모든 클라이언트들에게 방송한다
        socket.on('s_send_msg', (msg)=>{
            // 같은 방안에 모든 맴버에세 방송
            io.sockets.in( socket.room )
            .emit('c_send_msg', socket.user_name, msg, new Date())
        })
        // 3. 방정보 변경
        socket.on('s_send_roomChange', (chgRoom)=>{
            // 1. 기존방에서 빠진다
            socket.leave( socket.room )
            // 2. 기존방 맴버들한테 메시지 발송
            socket.broadcast.to( socket.room )
            .emit('c_send_msg', '관리자', `${socket.user_name}님이 퇴장하였습니다.`, new Date())
            // 3. 새로운 방정보 소켓에 세팅
            socket.room = chgRoom
            // 4. 신규방 진입->아이디받고 세팅하는 과정과 동일
            socket.join( socket.room )
            // 3. 기존방에 있는 맴버들 방송(나를 제외)
            socket.broadcast.to( socket.room )
            .emit('c_send_msg', '관리자', `${socket.user_name}님이 입장하였습니다.`, new Date())
            // 4. 조인한 유저한테도 방송(다른 문구)
            socket.emit('c_send_msg', '관리자', 
            `${socket.user_name}님 환영합니다.`, new Date())            
            // 5. 현재 서버의 방정보 전송
            socket.emit('c_send_roominfo',rooms, socket.room)
        })

    } )
}