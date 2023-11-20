class UserSkillsClass {
  skills: string[];

  addSkills(skill: string): void;
  addSkills(skill: string[]): void;

  addSkills(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills == 'string') {
      this.skills.push(...skillOrSkills)
    }
  }
}

const Dev = new UserSkillsClass();
Dev.addSkills('ddd')
