function validate(pattern,array,index,e,saveBtn){
    if(pattern.test(array[index].val())){
        array[index].css("border","3px solid green");
        if(e.key==='Enter'){
            array[index+1].focus();
        }
        saveBtn.prop("disabled",false);
        return true;
    }
    else{
         array[index].css("border","3px solid red");
         saveBtn.prop("disabled",true);
         return false;
    }
    return false;
}