
const functions = {
    
    size: (num) => {
        if (num < 0)  return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;       
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },

    taxCalculator: (num1) => {
        const teir1 = 47630
        const teir2 = 47629
        const teir3 = 52408
        const teir4 = 62704
               
        if (num1 <= 47630) {
            return num1 * 0.15
        } else if (num1 <= 95259) { 
            return ((num1 - 47630) * 0.205) + (teir1 *0.15);
        } else if (num1 <= 147667) {
            return ((num1 - 95259) * 0.26) + (teir2 * 0.205) + (teir1 * 0.15);
        } else if (num1 <= 210371) {
            return ((num1 - 147667) * 0.29) + (teir3 * 0.26) + (teir2 * 0.205) + (teir1 * 0.15);
        }else {
            return ((num1 - 210371) * 0.33) + (teir4 * 0.29) + (teir3 * 0.26) + (teir2 * 0.205) + (teir1 * 0.15);
        }
    }
    
};

export default functions;

