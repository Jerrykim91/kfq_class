-- 테이블 생성
CREATE TABLE `tbl_trans_log` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`src` TEXT NULL DEFAULT NULL COMMENT '번역요청한테스트원본',
	`out` TEXT NULL DEFAULT NULL COMMENT '번역된 텍스트',
	`slang` VARCHAR(4) NULL DEFAULT NULL COMMENT '언어감지한언어코드',
	`olang` VARCHAR(4) NULL DEFAULT NULL COMMENT '번역된언어코드',
	`uid` VARCHAR(32) NULL DEFAULT NULL COMMENT '번영요청한유저',
	`regdate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
)
COMMENT='번역 요청에 따른 언어감지 및 번역결과 로그'
ENGINE=InnoDB
;


-- 데이터 입력
INSERT INTO 
	`tbl_trans_log` 
	(`src`, `out`, `slang`, `olang`, `uid`) 
VALUES 
	('HelloWorld', '굿번역', 'en', 'ko', 'guest');

-- 배치학습을 위한 데이터 로드
-- 이미 학습한 데이터인지 아닌지를 체킹하는것도 검토
-- 이렇게 수집한 데이터의 결과가 정확한것인가? -> 검증?
select src, slang from tbl_trans_log;