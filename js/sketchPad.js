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

        this.refreshButton = document.getElementsByClassName("img-size")[0];
        this.#addEventListeners();
    }

    #addEventListeners(){
        this.canvas.onmousedown=(evt)=>{
            const mouse = this.#getMouse(evt);
            this.path=[mouse];
            this.isDrawing=true;
            console.log(mouse);
        }
        this.canvas.onmousemove=(evt)=>{
            if(this.isDrawing){
                const mouse = this.#getMouse(evt);
                this.path.push(mouse);
                this.#redraw();
            }
        }
        this.canvas.onmouseup=()=>{
            this.isDrawing=false;
        }
        this.refreshButton.onclick=()=>{
            this.ctx.clearRect(0, 0,
                this.canvas.width, this.canvas.height);
        }
    }
    #redraw(){
        draw.path(this.ctx, this.path);
    }
    #getMouse=(evt)=>{
        const rect=this.canvas.getBoundingClientRect();
            return [
                Math.round(evt.clientX-rect.left),
                Math.round(evt.clientY-rect.top)
            ];
    }

}