function removeChild (elemId){
    var deleArry = document.getElementById(elemId);
    while(deleArry.firstChild){
        deleArry.removeChild(deleArry.firstChild);
    }
}

removeChild("test");