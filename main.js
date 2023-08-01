$(document).ready(function() {

// populate skills

const skillbarWidth = 180;
let parentDiv = $('#skills');

for(let i = 0; i < skills.length; i++) {

    let skill = skills[i],
        name = skill[0],
        years = skill[1],
        level = skill[2],
        width = skillbarWidth * (level / 100);

        $('<div class="skill">' + name + '<div class="years">' + years + ' years</div><br/><div class="skill-bar"><div class="skill-bar-fill" style="width: ' + width + 'px"></div></div></div>').appendTo(parentDiv);
}

});
