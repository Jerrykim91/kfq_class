-- 해당 검색어가 포함된 주식 데이터 획득
-- selectStocksByKeyword() 함수구현
-- 1번인자 {}
-- 2번인자 callback함수
select name, code from tbl_trade
where name like '%삼성%'
;

-- 코드값을 기준으로 해당 주식 정보를 
-- 모두다 가져와라
-- selectStockByCode()
select * from tbl_trade
where code = '005930';



