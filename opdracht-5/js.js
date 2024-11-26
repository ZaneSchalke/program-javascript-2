  
        window.onload = function () {
           
            const canvas = document.createElement("canvas");
            canvas.width = 1920; 
            canvas.height = 1080; 
            const ctx = canvas.getContext("2d");

 
            document.body.appendChild(canvas);


            ctx.fillStyle = 'rgb(0, 255, 0)';


            for (let i = 1; i <= 10; i++) {
                ctx.beginPath();
                const radius = i * 10; 
                ctx.arc(50 + i * 100, 100, radius, 0, 2 * Math.PI); 
                ctx.fill();
            }
        };