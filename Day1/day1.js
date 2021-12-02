var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

function increase_measurement(array) {
    var count = 0;

    for(i = 1; i <= array.length; i++) {
        if (array[i-1] < array[i]) {
            process.stdout.write(array[i-1] + " " + array[i] + " ")
            count++;
        }
        // console.log(i)
    }
    
    console.log(count)
}

function increase_measurement_sliding_window(array){
    let temp = 0;
    let count = 0;

    for(i = 0; i < array.length-1; i++) {
        // if (i % 2 == 0) {
            window1 = parseInt(array[i+2]) + parseInt(array[i+1]) + parseInt(array[i]);
            if (temp > 0) {
                if (window1 > temp) {
                    count++;
                }
            }
            temp = window1;
            console.log(window1, temp);
        // }
    }
    
    console.log(count)
}

// 1
increase_measurement(array)

// 2
increase_measurement_sliding_window(array)