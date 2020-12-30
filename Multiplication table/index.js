let numberInput = document.getElementById('number-input');
let runButton = document.getElementById('run-button');
let output = document.getElementById('output');

function printMultiply(){
    let number = numberInput.value;
    let outputHtml = '';
    
    if(number == ''){
        output.innerHTML = 'กรุณาใส่ตัวเลขค่ะ';
        return
    }
    else if(number <= 0){
        output.innerHTML = 'กรุณาใส่ตัวเลขที่มากกว่า 0 ค่ะ';
        return
    }
    
    for(let i = 1; i <=12; i++){
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number*i);
        outputHtml += '</p>';
    }

    output.innerHTML = outputHtml;
}

runButton.addEventListener('click',printMultiply);