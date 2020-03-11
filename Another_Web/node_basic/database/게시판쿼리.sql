-- 주식 데이터 확인, 개수 확인
select count(*) from tbl_trade;

-- 주식 데이터에서 code, name, cur, rate
-- 만 가져오고, name으로 정렬(오름 차순), 
-- 상위 10개만 가져온다
select code, name, cur, rate from tbl_trade
order by name asc
limit 0, 10
;
-- 위의 데이터에서 11번째부터 다음 10개를 가져와라
select code, name, cur, rate from tbl_trade
order by name asc
limit 10, 10
;
select code, name, cur, rate from tbl_trade
order by name asc
limit 20, 10
;

-- 페이지는 	1, 2, 3
-- 쿼리는    0, 10, 20
-- 식 y = (page - 1) * 10(한페이지에 보이는 데이터수)