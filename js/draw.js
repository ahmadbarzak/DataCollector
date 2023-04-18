const draw={};

draw.path=(ctx,path,color)=>{
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(...path[0]);
    for(let i=0; i < path.length; i++){
        ctx.lineTo(...path[i]);
    }
    ctx.stroke();
    ctx.lineCap="round";
    ctx.lineJoin="round";
    ctx.closePath()
}

draw.paths=(ctx, paths)=>{
    for(const currentPath of paths){
        const color = currentPath[0];
        const path = currentPath[1];
        draw.path(ctx, path, color);
    }
}