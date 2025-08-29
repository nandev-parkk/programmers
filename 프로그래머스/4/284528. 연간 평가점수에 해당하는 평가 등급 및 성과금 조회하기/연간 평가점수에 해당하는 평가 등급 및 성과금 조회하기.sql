-- 코드를 작성해주세요
-- HR_DEPARTMENT: 부서 정보 테이블
-- HR_EMPLOYEES: 사원 정보 테이블
-- HR_GRADE: 2022년 사원의 평가 정보 테이블
-- 사원별 성과금 조회. 사번, 성명, 평가 등급(GRADE), 성과금(BONUS)을 사번 오름 차순으로 조회
SELECT HE.EMP_NO, HE.EMP_NAME,
    (
        CASE 
            WHEN AVG(SCORE) >= 96 THEN 'S'
            WHEN AVG(SCORE) >= 90 THEN 'A'
            WHEN AVG(SCORE) >= 80 THEN 'B'
            ELSE 'C'
        END
    ) AS GRADE,
    (
        CASE 
            WHEN AVG(SCORE) >= 96 THEN SAL * 0.2
            WHEN AVG(SCORE) >= 90 THEN SAL * 0.15
            WHEN AVG(SCORE) >= 80 THEN SAL * 0.1
            ELSE 0
        END
    ) AS BONUS
FROM HR_EMPLOYEES HE
    JOIN HR_GRADE HG
    ON HE.EMP_NO = HG.EMP_NO
GROUP BY HE.EMP_NO
ORDER BY HE.EMP_NO;