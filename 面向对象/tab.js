function Block(){
    this.bg();
    this.show();
    this.main();
    this.mouseOver();
}
var arr = ["AAA","BBB","CCC","DDD"];
Block.prototype.bg=function(){
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.marginLeft='100px';
    div.style.marginTop = '100px';
    this.div1 = div;

};
Block.prototype.show = function(){
    var ul = document.createElement('ul');
    this.div1.appendChild(ul);
    ul.style.float='left';
    ul.style.height='30px';
    ul.style.padding='0';
    ul.style.lineHeight='30px';
    ul.style.margin = '0';
    ul.style.borderRight='1px solid #ccc';

    for(var i=0  ; i<4 ;i++){
        var li = document.createElement('li');
        ul.appendChild(li);
        li.style.float = 'left';
        li.style.width='100px';
        li.style.textAlign='center';
        li.style.border = '1px solid #ccc';
        li.style.borderRight = 'none';
        li.style.listStyle ='none';
        li.innerHTML =arr[i];
        li.dataset.tag=i;
    }
};

Block.prototype.main = function(){
    var div1 = document.createElement('div');
    this.div1.appendChild(div1);
    div1.style.float = 'left';
    div1.style.marginBottom='20px';
    div1.style.clear='left';

    for( var i=0;i<4;i++){
        var div2 = document.createElement('div');
        this.div1.appendChild(div2);
        div2.style.width='403px';
        div2.style.height = '200px';
        div2.style.border='1px solid #ccc';
        div2.style.float = 'left';
        div2.style.borderTop='none';
        div2.style.lineHeight='200px';
        div2.style.textAlign = 'center';
        //div2.style.display='none';
        div2.innerHTML = arr[i];
    }
};
Block.prototype.mouseOver=function(event){
    var lis =  document.querySelectorAll('li');
    var tag = event.target.dataset.tag;
    for(var i = 0;i<=tag ;i++){
        lis[i].style.borderTop = '1px solid blue';
        lis[i].style.borderBottom = 'none';
    }
};
Block.prototype.mouseOut=function(event){

};
