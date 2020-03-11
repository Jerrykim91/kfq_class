// 써드 파트 패키지 모듈 가져오기
var createError  = require('http-errors');
var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');

// 내가 만든 모듈 가져오기
// 특정 요청에 대한 응답을 누가 할것인지, 어떤 url로 할것인지 정의하고, 가져온다
var indexRouter  = require('./routes/index');
var usersRouter  = require('./routes/users');

// 웹서비스의 핵심 객체(앱) => express 객체
var app          = express();
// ------------------------------------------------------------------------

// 앱에 환경 설정
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// express -e XXX => -e => ejs를 의미
// 이 웹서비스는 렌더링 템플릿 엔진으로  ejs를 사용한다
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 정적 데이터 위치 설정
app.use(express.static(path.join(__dirname, 'public')));

// blueprint
// 핵심, 어떤 요청이 왔을때, 어떤 모듈이 처리할것인지 지정하는 곳=>라우트
// ~/ => 이런 주소로 요청이 들어오면 indexRouter가 담당
app.use('/', indexRouter);
// ~/users => 이런 주소로 요청이 들어오면 usersRouter가 담당
app.use('/users', usersRouter);
// ----------------------------------------------------------------------

// 정상 : 200
// 100~ 404, 500, 200 ->  http 프로토콜의 응답 코드
// 404 에러 정의 : 우리가 웹서비스에는 그런 주소를 처리하는 페이지가 없다
// page not found
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 500 에러 정의, 서버츳 오류
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// ----------------------------------------------------------------------


// 대표 모듈 
// module.exports = 객체
// 외부에서는 app 을 통해서만 접근 가능
module.exports = app;
