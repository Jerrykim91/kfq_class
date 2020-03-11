var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// ---------------------------------------------
// 세션추가
const session = require('express-session')
// ---------------------------------------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var stockRouter = require('./routes/stock');

var app = express();
// 세션키 지정 및 추가
app.set('trust proxy', 1)
// epxress객체에 맴버를 추가하는 느낌 => express객체의 req객체에 맴버로 추가
// 모든 라우트를 정의함 함수에서 콜백함수의 1번인자인 req를 통해서 세션을 접근할수 있다
app.use( session({
  secret:'slkdaldwasldsjladsjlasmkd',
  resave:false,
  saveUninitialized:true
}) )

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 세션이 없어도 진입할수 있는 사이트, 라우트, url ...
app.use('/users', usersRouter);
// 작업이 다 끝나면 세션 밑으로 이동
app.use('/stock', stockRouter);
app.use('/', indexRouter);

// 전체 요청이 들어오는 지점 -> 라우트는 정의하기 직전
// 여기서 세션이 없어도 되는 페이지(라우트) 와 세션이 있어야 하는 페이지를 쪼개서 관리
// 라우트에서 요청을 분석하기 전에 모든 요청은 이 콜백함수를 타고 들어온다

// 새로운 작업을 수행할것인데, 서버가 재가동되면 세션이 날라가 버려서 계속 로그인해야한다
// 임시로 주석 처리함
app.use( (req, res, next)=>{
  // 세션 체크 지점  
  console.log('세션 체크 지점')
  if( req.session.uid == null || typeof(req.session.uid) === 'undefined' ){
    res.redirect( '/users/login' )
  }else{ // 세션이 존재한다
    // 이쪽으로 들어온 요청을 넘길때 사용
    next()
  }
} )




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
