document.getElementById('button').onclick= function(){
    let val=document.querySelector('input').value;
    console.log(val);
    let items= document.querySelectorAll('#name');
    console.log(items);
    let err=document.querySelector('.error');
    let counter=0;
    let valReg=new RegExp(val, "ig");
    console.log(valReg);

    if(val!=''){
        items.forEach(function(elem){

            if(elem.innerText.search(valReg)==-1){
                elem.parentElement.classList.add('hide');
                elem.innerHTML=elem.innerText;
            }
            else{
                counter++;
                elem.parentElement.classList.remove('hide');
                let str=elem.innerText;
                elem.innerHTML=insertmark(str, elem.innerText.search(valReg),val.length);
            }
            
            console.log(err.innerText);
        })

        if (counter==0){
            err.innerText="Ничего не найдено";
        }
        else{
            err.innerText="Найдено"+" "+counter+" "+"совпадений";
        }
        
    }
    
    else{
        items.forEach(function(elem){
            elem.parentElement.classList.remove('hide');
            err.innerText="Ничего не найдено";
            elem.innerHTML=elem.innerText;
        })
    }
    
}

function insertmark(string,pos,len){

    return string.slice(0, pos)+'<mark>'+string.slice(pos, pos+len)+'</mark>'+string.slice(pos+len);
}