const cursor = document.getElementById("cursor");


const frontground = document.querySelector(".frontground");


function mouseCursor(){
    frontground.addEventListener("mousemove", (e)=>{
        let x = e.pageX + "px";
        let y = e.pageY + "px"; 

        cursor.style.opacity = 1;
        cursor.style.left = x;
        cursor.style.top = y;
    })
}


frontground.addEventListener("mouseleave", ()=>{
    cursor.style.opacity = 0;

})


mouseCursor()

