let main=document.querySelector("main")
let im=document.getElementById("im")
let cont
onload=function(){
    cont="x"
    im.src="images/"+cont+".png"
    main.innerHTML=""
    for(let i=0;i<9;i++){
        let div=document.createElement("div")
        div.addEventListener("click",check)
        div.id=i 
        if(i<3)
        div.className=1
        else if(i<6)
        div.className=2
        else
        div.className=3
        main.appendChild(div)
    }
}
function check(){
    if(this.hasChildNodes())
    return;
    check1(this)
}
function check1(e){
    if(cont=="o"){
    criar(e)
    cont="x"
    im.src="images/"+cont+".png"
    return;
    }
    criar(e)
    cont="o"
    im.src="images/"+cont+".png"
}
function criar(e){
    let img=document.createElement("img")
    img.src="images/"+cont+".png"
    e.appendChild(img)
    e.setAttribute("k",cont)
    setTimeout(ganhou,50)
}
let a=[]
function ganhou(){
    for(let i=0;i<9;i++){
    a[i]=document.getElementById(i).getAttribute("k")
    }
    if(((a[0]==a[1]&&a[0]==a[2])||(a[0]==a[3]&&a[0]==a[6]))&&(a[0]!=null))
    ganhei(a[0])
    else if(((a[3]==a[4]&&a[3]==a[5])||(a[4]==a[1]&&a[1]==a[7])||(a[4]==a[2]&&a[2]==a[6])||(a[0]==a[4]&&a[0]==a[8]))&&(a[4]!=null))
    ganhei(a[4])
    else if(((a[6]==a[7]&&a[6]==a[8])||(a[2]==a[5]&&a[2]==a[8]))&&(a[8]!=null))
    ganhei(a[8])
    let k=0
    for(let i=0;i<9;i++){
        if(document.getElementById(i).hasChildNodes())
        k++
        if(k==9)
        velha()
    }
}
function ganhei(e){
    alert(e+" ganhou")
    onload()
}
function velha(){
    alert("Deu velha")
    onload()
}