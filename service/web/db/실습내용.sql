# sys_config의 데이터는 오직 1개로 만들어서 관리
select model_ver from sys_config;

# 실습
# selectModelInfo 함수를 db/__init__.py 에 구현
# ml/__init__.py에서 댕겨서 경로를 설정해준다
select dir, label from predict_model_mgr
where ver=(select model_ver from sys_config);