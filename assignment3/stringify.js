

const stringify = (object, index=1)=> {
    let serializedObj = "{\n";
    let preset = ""; 
    for(let i = 0; i<index;i++) {
        preset += "    ";
    }
    for(let key in object) {
        let valueStr = "";
        if(typeof(object[key]) === 'object' && object[key]!=null){

            valueStr += stringify(object[key],index+1);
            serializedObj += preset+`"${String(key)}" : ${valueStr},\n`; 
        }    
        else {
            valueStr +=String(object[key]);
            serializedObj += preset+`"${key}" : "${valueStr}",\n`; 
        }  
    }
    return serializedObj + preset+"}";
}

const obj = {
    firstName : "Sritiman",
    lastName : undefined,
    address : {
        location : {
            city : "Kolkata",
            country : "India",
        },
        pincode : null,
        permanent : true,
    }
}

console.log(stringify(obj));