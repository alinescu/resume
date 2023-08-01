$(document).ready(function() {

// populate skills

let par = $('#skills');

for(let i = 0; i < skills.length; i++) {

    let skill = skills[i],
        name = skill[0],
        years = skill[1],
        level = skill[2]

        let x = $('<div class="skill">' + name + '<div class="years">' + years + ' years</div><br/><div class="skill-bar _' + level + '"><div class="skill-bar-fill"></div></div></div>')
        x.appendTo(par);
}

});
