"use strict";
class UserSkillsClass {
    skills;
    addSkills(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(...skillOrSkills);
        }
    }
}
const Dev = new UserSkillsClass();
Dev.addSkills('ddd');
