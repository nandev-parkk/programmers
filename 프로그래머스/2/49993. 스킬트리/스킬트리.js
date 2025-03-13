function solution(skill, skill_trees) {
      const regex = new RegExp(`[^${skill}]`, "g");

  const answer = skill_trees
    .map((tree) => {
      const convertedTree = tree.replaceAll(regex, "");

      return (
        convertedTree.startsWith(skill[0]) && skill.includes(convertedTree) ||
        convertedTree === ""
      );
    })
    .filter((v) => v);

  return answer.length;
}