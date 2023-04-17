class SketchPad{
    constructor(container, size=400){
        this.canvas=document.createElement("canvas");
        this.canvas.width=size;
        this.canvas.height=size;
        this.canvas.style=`
            background-color:white;
            box-shadow: 0px 0px 10px 2px black;
        `;
        container.appendChild(this.canvas);

        this.ctx=this.canvas.getContext("2d");

        this.path=[];
        this.isDrawing=false;
        this.refreshButton = document.getElementsByClassName("img-size")[0];
        this.#addEventListeners();
    }

    #addEventListeners(){
        this.canvas.onmousedown=(evt)=>{
            const rect = this.canvas.getBoundingClientRect();
            const mouse = [
                evt.clientX-rect.left,
                evt.clientY-rect.top
            ];
            this.isDrawing=true;
            console.log(mouse);
        }
        this.canvas.onmousemove=(evt)=>{
            if(this.isDrawing){
                const rect = this.canvas.getBoundingClientRect();
                const mouse = [
                    evt.clientX-rect.left,
                    evt.clientY-rect.top
                ];
                this.path.push(mouse);
                console.log(this.path.length);
            }
        }
        this.canvas.onmouseup=()=>{
            this.isDrawing=false;
        }
        this.refreshButton.onclick=()=>{
            this.ctx.clearRect(0, 0,
                this.canvas.width, this.canvas.height);
            console.log(this.refreshButton);
        }
    }

}