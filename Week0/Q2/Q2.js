function loop(){
let array = $('#myText').val().split(",");
let i = 0;

const insertNumber = setInterval(() => {
    if(i < array.length){
        const para = document.createElement("p");
        const node = document.createTextNode(array[i]);
        para.appendChild(node);
        const element = document.getElementById("output");
        element.appendChild(para);
        i++;
    }else{
        clearInterval(insertNumber);
    }
},3000);

}

