function solution(id_list, report, k) {
  // report에서 신고당한 id를 key,  {신고 당한 횟수: ..., 신고자: []} value로 객체를 만든다.
  const reportCounts = {};

  for (const ids of report) {
    const [reporter, respondent] = ids.split(" ");

    // reporters에 reporter가 이미 포함되어 있는 경우 건너뛰기
    if (
      respondent in reportCounts &&
      reportCounts[respondent].reporters.includes(reporter)
    )
      continue;

    reportCounts[respondent] = {
      count:
        ((respondent in reportCounts && reportCounts[respondent].count) || 0) +
        1,
      reporters:
        respondent in reportCounts
          ? [...reportCounts[respondent].reporters, reporter]
          : [reporter],
    };
  }

  const filteredReportCounts = Object.values(reportCounts)
    .filter(({ count }) => count >= k)
    .map(({ reporters }) => reporters);

  const answer = id_list.map((id) => {
    let count = 0;

    for (const reporters of filteredReportCounts) {
      reporters.includes(id) && count++;
    }

    return count;
  });

  return answer;
}