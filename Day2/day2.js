var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

function get_position(array) {
    horizontal_pos = 0;
    depth = 0;
    aim = 0;

    for (position of array) {
        positions = position.split(' ')
        // console.log(positions)
        if (positions[0] == 'forward') {
            horizontal_pos += parseInt(positions[1])
            depth += parseInt(positions[1]) * aim;
        } else if (positions[0] == 'up') {
            aim -= parseInt(positions[1])
        } else {
            aim += parseInt(positions[1])
        }
    }

    console.log(horizontal_pos * depth)
}

get_position(array)