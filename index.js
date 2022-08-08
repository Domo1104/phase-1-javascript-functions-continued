// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
} 

let mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(highlight = "*") {
    return function (adj = "special") {
        return `You are ${highlight}${adj}${highlight}!`
    }
}