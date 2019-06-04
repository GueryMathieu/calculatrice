let $add1 = $('#add1');
let $add2 = $('#add2');
let $addTotal = $('#addTotal');
let $addButton = $('#addButton');
let a = Number($add1[0].value);
let b = Number($add2[0].value);

$addButton.click(function () {
    $addTotal[0].value = a + b;
});



let $minus1 = $('#minus1');
let $minus2 = $('#minus2');
let $minusTotal = $('#minusTotal');
let $minusButton = $('#minusButton');
let c = Number($minus1[0].value);
let d = Number($minus2[0].value);

$minusButton.click(function () {
    $minusTotal[0].value = c - d;
});



let $div1 = $('#div1');
let $div2 = $('#div2');
let $divTotal = $('#divTotal');
let $divButton = $('#divButton');
let e = Number($div1[0].value);
let f = Number($div2[0].value);

$divButton.click(function () {
    $divTotal[0].value = e / f;
});



let $mult1 = $('#mult1');
let $mult2 = $('#mult2');
let $multTotal = $('#multTotal');
let $multButton = $('#multButton');
let g = Number($mult1[0].value);
let h = Number($mult2[0].value);

$multButton.click(function () {
    $multTotal[0].value = g * h;
});


// one line //


let $input1 = $('#input1')
let $inputOP = $('#inputOP')
let $input2 = $('#input2')
let $result = $('#result')
let $equals = $('#egal')

let x = Number.parseInt($input1[0].value);
let y = Number.parseInt($input2[0].value);


let $op = $inputOP[0].value;

let int = setInterval(calc, 1000);

function calc() {
    let x = Number.parseInt($input1[0].value);
    let y = Number.parseInt($input2[0].value);
    let $op = $inputOP[0].value;
}

$equals.click(function calc() {
    if ($op === '+') {
        $result[0].value = x + y;
    }
    if ($op === '-') {
        $result[0].value = x - y;
    }
    if ($op === '/') {
        $result[0].value = x / y;
    }
    if ($op === '*') {
        $result[0].value = x * y;
    }
    

});
