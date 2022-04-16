const object1  = {
    extra : {

    },
    a : "1",
    b : 2,
    c :  {
        d : "Hello",
        e : "World",
        n : {
            another_extra : {},
            b : "",
            a_new : {
                name : "shark",
            },
            cors : true,
        },
        k : "Sritiman",
    }
}
const object2  = {
    a : "1",
    c :  {
        d : "Hello",
        e : "World",
        k : "Sritiman",
        n : {
            a_new : {
                name : "shark",
            },
            b : "",
            another_extra : {},
            cors : true
        },
    },
    b : 2,
    extra : {
        
    },
}


const areSame = (object1, object2)=> {
    // return JSON.stringify(object1) === JSON.stringify(object2); //--> incorrect
    if(Object.keys(object1).length !== Object.keys(object2).length) 
        return false;

    for(key in object1) {

        if(typeof(object1[key]) === 'object' && typeof(object2[key]) === 'object') {  //object type
            if(!areSame(object1[key],object2[key]))
                return false;
        }
        //primitive type
        else {
            if(!(object2[key] === object1[key])) {
                return false;
            }
            
        }
    }
    return true;
}

console.log(areSame(object1,object2));
