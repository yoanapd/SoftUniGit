function operationBetweenNumbers (input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operation = input[2];
    let result = 0;
    type = "";
    let module = 0;
  
    switch(operation) {
        case "+":
            result = n1 + n2;
            break;
            case "-":
                result = n1 - n2;
                break;
                case "*":
                    result = n1 * n2;
                    break;
                    case "/":
                        result = (n1 / n2).toFixed(2);
                        break;
                        case "%":
                            module = n1 % n2;
                            break;                        
    }
    if (operation === "+" || operation === "-" || operation === "*") {
        if (result % 2 === 0) {
            type = "even"

        } else {
            type = "odd"
        }
        console.log(`${n1} ${operation} ${n2} = ${result} - ${type}`)

    };

    if (operation === "/"  && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`)
        
    };

  

    if (operation === "/" && n2 !==0) {
        console.log(`${n1} / ${n2} = ${result}`)

    };

    if (operation === "%" && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`) }

    if (operation === "%" & n2 !==0) {
        
        console.log(`${n1} % ${n2} = ${module}`)
    };



}
operationBetweenNumbers(["123",
"12",
"/"])
