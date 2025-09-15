-- 코드를 작성해주세요
-- 3세대 대장균의 ID를 오름차순으로 출력

SELECT *
FROM ECOLI_DATA A
    JOIN ECOLI_DATA B
        ON A.PARENT_ID = B.ID
    JOIN ECOLI_DATA C
        ON B.PARENT_ID = C.ID