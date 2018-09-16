function calculator(operation, value1, value2){
        this.sign = operation.toString();
        this.a = value1;
        this.b = value2;

        if(this.sign==='+'){
            return this.a+this.b;
        }else if(this.sign==='-'){
            return this.a-this.b;
        }else if(this.sign==='*'){
            return this.a*this.b
        }else if(this.sign==='/'){
            return this.a/this.b;
        }else{
            throw new Error('incorrect input');
        }
}