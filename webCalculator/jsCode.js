let input = document.getElementById('inputBox');
let ans = document.getElementById('result');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '0'){
            input.value ='';
        }
        if(e.target.innerHTML == 'ENTER'){
            if(string != ''){
                try{
                    string = eval(string);
                    ans.value = string;
                }catch{
                    ans.value ="wrong syntax"
                    input.value ='';
                }
            }
            string = eval(string);
            ans.value = string;
        }
        else if(e.target.innerHTML == 'ans'){
            if(string != ''){
                try{
                    string = eval(string);
                    ans.value = string;
                }catch{
                    ans.value ="wrong syntax"
                    input.value ='';
                }
            }
            string = eval(string);
            ans.value = string;
        }
        else if(e.target.innerHTML == 'clear'){
            string = "";
            input.value = string;
            ans.value = string;
        }
        else if(e.target.innerHTML == 'del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '*'){
            let char = string.charAt(string.length-1);
            if(string == ''){
                input.string = '';
            }
            else if(char == '*' || char == '/' || char == '+' || char == '-' || char == '%'){
                input.value = string;
            }else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else if(e.target.innerHTML == '/'){
            let char = string.charAt(string.length-1);
            if(string == ''){
                input.string = '';
            }
            else if(char == '*' || char == '/' || char == '+' || char == '-' || char == '%'){
                input.value = string;
            }else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else if(e.target.innerHTML == '%'){
            let char = string.charAt(string.length-1);
            if(string == ''){
                input.string = '';
            }
            else if(char == '*' || char == '/' || char == '+' || char == '-' || char == '%'){
                input.value = string;
            }else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else if(e.target.innerHTML == '+'){
            let char = string.charAt(string.length-1);
            if(string == ''){
                input.string = '';
            }
            else if(char == '*' || char == '/' || char == '+' || char == '-' || char == '%'){
                input.value = string;
            }else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else if(e.target.innerHTML == '-'){
            let char = string.charAt(string.length-1);
            if(string == ''){
                input.string = '';
            }
            else if(char == '*' || char == '/' || char == '+' || char == '-' || char == '%'){
                input.value = string;
            }else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else if(e.target.innerHTML == '√'){
             string = Math.sqrt(string);
             ans.value = string;
        }
        else if(e.target.innerHTML == '±'){
            let x = input;
            let y = x.value;
            y = y*-1;
            input.value = y;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
