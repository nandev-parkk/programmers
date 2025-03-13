function solution(skill, skill_trees) {
      const regex = new RegExp(`[^${skill}]`, "g");

    const answer = skill_trees
    .map((tree) => tree.replace(regex, ""))
    .filter((v) => !skill.indexOf(v) || !v);

  return answer.length;
}