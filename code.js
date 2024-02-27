ias_build_params = function(params, concat_str){
    if(Object.keys(params).length == 0){
        if(concat_str.length > 0){
            return concat_str.substring(0, concat_str.length-1);
        }else{
            return concat_str;
        }
    } else {
        var key_current = Object.keys(params)[0];
        var val_current = params[Object.keys(params)[0]]
        delete params[key_current];
        return ias_build_params(params, concat_str + key_current + "=" + val_current + "&")
    }
}

var ias_params = {
    andId: 987987,
    nunu: 78709,
    lala: 'John',
    lele: 'Doe'
}

var result = ias_build_params(ias_params, "");  
console.log(result);
