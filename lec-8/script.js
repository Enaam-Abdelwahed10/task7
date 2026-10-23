const wall = document.body;
const contextMenu = document.getElementById('contextMenu');
let activeBox = null ;
let copiedText = "";
wall.addEventListener('click',(e)=>{
    contextMenu.classList.add('hidden');
    if(e.target === wall){
        createBOX(0,0, "اكتب ذكرياتك هنا ...");
    }
});
function createBOX(x,y,text){
    const box = document.createElement('div');
    box.className = "absolute bg-amber-100 text-slate-800 p-4 rounded-xl shadow-xl w-48 min-h-[100px] cureor-move border border-amber-200";
    box.style.left = '${x-90}px';
    box.style.top = '${y-50}px';
    const content = document.createElement('div');
    content.className = "outline-none w-full h-full min-h-[70px] break-words";
content.contentEditable = "True";
content.innerText = text ;
content.addEventListener('click', (e)=> e.stopPropagation());
box.appendChild(content);
wall.appendChild(box);
makeDraggable(box);
box.addEventListener('contextMenu',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    activeBox = box;
    contextMenu.style.left = '${e.clientX}px';
    contextMenu.style.top = '${e.clientY}px';
    contextMenu.classList.remove('hidden');
});
}
function makeDraggable(box){
    let isDragging = false;
    let startX,startY, initialLeft,initialTop;
    box.addEventListener('mousedown',(e)=>{
        if(document.activeElement === box.querySelector('div'))
            return;
        isDragging =true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft =box.offsetLeft;
        initialTop =box.offsetLTop;
        box.style.zIndex = "40";
    
    });
    document.addEventListener('mousemove',(e) => { 
        if(!isDragging) return;
        box.style.left = `${initialLeft + (e.clientX - startX)}px`;
        box.style.top = `${initialTop + (e.clientY - startY)}px`;
    });
    document.addEventListener('mouseup',() =>{
        if (isDragging) {
            isDragging = false;
            box.style.zIndex = "10";
        }       
        
    });
}
document.addEventListener('click', () =>{
    contextMenu.classList.add('hidden');
});
document.getElementById('btnCopy').addEventListener('click',()=>{
    if(activeBox){
        copiedText = activeBox.querySelector('div').innerText;
    }
    contextMenu.classList.add('hidden');
});
document.getElementById('btnCut').addEventListener('click',()=>{
    if(activeBox){
        copiedText = activeBox.querySelector('div').innerText;
        activeBox.remove();
        activeBox = null;
    }
    contextMenu.classList.add('hidden');
});