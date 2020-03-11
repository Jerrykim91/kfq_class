-- 해당 테이블의 모든 정보 가져오기
select * from tbl_users;

-- 로그인: uid와 upw가 일치하는 회원 정보 가져오기
select 
	* 
from 
	tbl_users 
where
	uid = 'guest'
and 
	upw = '1'
;