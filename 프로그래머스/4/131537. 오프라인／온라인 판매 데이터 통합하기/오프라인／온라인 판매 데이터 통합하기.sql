-- 코드를 입력하세요
-- 2022년 3월의 온/오프 상품 판매 데이터의 판매 날짜, 상품 ID, 유저 ID, 판매량 출력
-- OFFLINE_SALE 판매 데이터의 USER_ID 값은 NULL로 표시
-- 결과는 판매일 기준 오름차순, 상품 ID 오름차순, 유저 ID 오름차순 정렬

SELECT DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE, PRODUCT_ID, USER_ID, SALES_AMOUNT
FROM
    (
        SELECT SALES_DATE, USER_ID, PRODUCT_ID, SALES_AMOUNT
        FROM ONLINE_SALE
        WHERE MONTH(SALES_DATE) = '03'
        
        UNION ALL
        
        SELECT SALES_DATE, NULL AS USER_ID, PRODUCT_ID, SALES_AMOUNT
        FROM OFFLINE_SALE
        WHERE MONTH(SALES_DATE) = '03'
    ) AS ALL_SALES
ORDER BY SALES_DATE, PRODUCT_ID, USER_ID