/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  if (!skill.length) return -1;

  let formattedSkillList = [...skill];
  formattedSkillList.sort((a, b) => a - b);

  let totalChemistry = 0;
  const target = formattedSkillList[0] + formattedSkillList.at(-1);
  totalChemistry = formattedSkillList[0] * formattedSkillList.at(-1);

  for (let i = 1; i < Math.floor(skill.length / 2); i++) {
    // wrong case
    if (formattedSkillList[i] + formattedSkillList.at(-1 - i) !== target) {
      return -1;
    }
    totalChemistry += formattedSkillList[i] * formattedSkillList.at(-1 - i);
  }

  return totalChemistry;
};
