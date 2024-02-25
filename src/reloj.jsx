import React, { useEffect } from 'react';
import p5 from 'p5';

const Relojito1 = () => {
    useEffect(() => {
        let sketch = new p5(p => {
            

            p.setup = () => {
                p.createCanvas(300, 300);
                p.frameRate(1);
                p.noLoop();
                p.angleMode(p.DEGREES);
            };

            p.draw = () => {
                p.background(255);
                p.translate(150, 150);

                
                p.stroke(0);
                p.fill(0);
                for (let i = 0; i < 60; i++) {
                    let angle = p.map(i, 0, 60, 0, 360);
                    let x = 120 * p.cos(angle);
                    let y = 120 * p.sin(angle);
                    let size = i % 15 === 0 ? 4 : i % 5 === 0 ? 2 : 1;
                    p.ellipse(x, y, size, size);
                }

                
                let now = new Date();
                let hora = now.getHours() % 12;
                let minuto = now.getMinutes();
                let segundo = now.getSeconds();

                // Dibujar manecillas
                p.strokeWeight(6);
                // Horas
                p.stroke(0);
                p.line(0, 0, 50 * p.cos(p.map(hora + minuto / 60, 0, 12, 0, 360)), 50 * p.sin(p.map(hora + minuto / 60, 0, 12, 0, 360)));
                // Minutos
                p.stroke(0);
                p.strokeWeight(4);
                p.line(0, 0, 80 * p.cos(p.map(minuto + segundo / 60, 0, 60, 0, 360)), 80 * p.sin(p.map(minuto + segundo / 60, 0, 60, 0, 360)));
                // Segundos
                p.stroke(255, 0, 0);
                p.strokeWeight(2);
                p.line(0, 0, 100 * p.cos(p.map(segundo, 0, 60, 0, 360)), 100 * p.sin(p.map(segundo, 0, 60, 0, 360)));


                // Mostrar hora digital
                p.fill(0);
                p.textSize(20);
                p.textAlign(p.CENTER, p.CENTER);
                p.text(`${p.nf(hora, 2)}:${p.nf(minuto, 2)}:${p.nf(segundo, 2)}`, 0, 120);
            };
        });

        return () => {
            sketch.remove();
        };
    }, []);

    return <div id="relojito"></div>;
};

export default Relojito1;
