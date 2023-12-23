"use client"
import dynamic from "next/dynamic";
import P5 from "p5";

import { CENTER } from 'p5';
const importFunction = () => import('p5-react').then((mod) => mod.default)
let Sketch: any = null
if (typeof window !== 'undefined') {
    Sketch = dynamic(importFunction, { ssr: false })
}

export default function App(){

    const setup = (p5: P5, canvasRef: HTMLDivElement) => {
        p5.createCanvas(700, 500).parent(canvasRef);
    };
    
  // Starting position of the ball
  let x_start = 50;
  let y_start = 325;
  
  let mouseJustPressed = 0;
  let shotMade = 0;
  let score = 0;
  let shots = 0;
  let tries = 0;
  let rims = 0;
  let bricks = 0;
  let textDisplay = 0;
  let endText = "";
  let hotStreak = 0;
  
  let skyBall = 0;
  
  let scoreCounted = 0;

  
  // Initialize variables x and y to ball start position
  // x and y are the screen coordinates of the ball
  let x = x_start;
  let y = y_start;
  
  // Hoop location
  let hoopX = 500
  let hoopY = 150
  
  // Direction the ball is moving? up or down 
  let direction=1;
  let speedX = 0.3; // this is really the x-speed
  
  let speedY = -9;
  
  let speed = Math.sqrt(speedX*speedX + speedY*speedY);
  
  const g = - 0.3;
  
  // Let Ball Fly
  let shoot = 0;
  
  // Basketball radius
  const radius = 20;

    const sketch = (p5: P5) => {
        p5.draw = () => {
            // Draw
            p5.background(0);
            p5.fill(210,180,140) // This is color of rect below
            p5.rect(0, 200, 900, 200) // (x, y, width, height)
            
            p5.textSize(28)
            p5.text("Buckets: " + score, 300, 35)
            p5.fill(255, 100, 100)
            p5.text("Shots: " + shots, 100, 35)
            p5.fill(230, 200, 0)
            p5.text("Hot Streak: " + hotStreak, 500, 35)
            
            // Hoop is an ellipse and some lines for the net
          
  p5.noFill()
  p5.stroke(0);
  p5.strokeWeight(4);
  p5.stroke(255,140,0);
  p5.ellipse(hoopX,hoopY,radius*3,radius/2)
  p5.stroke(0)
  p5.fill(255,255,255)
  p5.quad(hoopX + radius*3/2 - radius/5, hoopY-radius/5, hoopX + radius*3/2 + radius*0.75 - radius/5, hoopY + radius/5, hoopX + radius*3/2 + radius*0.75 - radius/5, hoopY - radius*3 + radius/5, hoopX + radius*3/2 - radius/5, hoopY - radius*3 - radius/5)
  p5.line(hoopX + radius*3/2 + radius/10, hoopY, hoopX + radius*3/2 + radius/10,y_start+radius)
  p5.rect(hoopX + radius*3/2,hoopY-radius*3, radius*0.75, radius*3)
  p5.noFill()
  p5.circle(440,100,5)
  p5.stroke(255)
  // line(440,100, 540,200)
  // line(560, 100, 460, 200)
  p5.stroke(255)
    
  p5.stroke(255)
  p5.strokeWeight(4);
  p5.line(hoopX-radius*3/2, hoopY , hoopX-radius, hoopY + 3*radius)
  p5.line(hoopX +radius, hoopY + 3*radius, hoopX + radius*3/2, hoopY)
  p5.line(hoopX + radius*3/2, hoopY, (hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2)
  p5.line(hoopX - radius*3/2, hoopY, (hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2)
  p5.line((hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2, hoopX +radius, hoopY + 3*radius)
  p5.line((hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2, hoopX -radius, hoopY + 3*radius)
  p5.stroke(0)
  p5.strokeWeight(1)
  p5.strokeWeight(1);
    let rimX = hoopX-radius*3/2
    let rimY = hoopY
  
  let boardX = hoopX + radius*3/2
  let boardY = hoopY - radius*3
  if (shoot == 1){
    speedY = speedY - g;
    
    x = x + direction*speedX;
  
    y = y + speedY;
  
    if (y > y_start){
      y = y_start;
      speedY = -speedY*0.5;
    }
    
    if (x > 600 - radius){
      x = 600 - radius;
      speedX = -speedX*0.5;
    }
    
    if (x < 0 + radius){
      x = radius;
      speedX = -speedX*0.5;
    }
    if ((rimX-x)*(rimX-x) + (rimY-y)*(rimY-y) <= radius*radius){
        speed = Math.sqrt(speedX*speedX + speedY*speedY);
        speedX = -speed*(rimX-x)/radius;
        speedY = -speed*(rimY-y)/radius;
        rims += 1;
    }

  if (hoopY - radius*3 - radius/5 < y && y < hoopY + radius/5){
    if (x > hoopX + radius*3/2 - radius/5 - radius && x < hoopX + radius*3/2 + radius*0.75 - radius/5 && speedX > 0){
      x = hoopX + radius*3/2 - radius/5 - radius
      speedX = -speedX*0.5;
      bricks += 1;
    }
    if (x > hoopX + radius*3/2 + radius*0.75 &&  x < hoopX + radius*3/2 + radius*0.75  +radius - radius/5 && speedX < 0){
      x =hoopX + radius*3/2 + radius*0.75 + radius - radius/5
      speedX = -speedX*0.5;
    }
  }
  else if ((boardX-x)*(boardX-x) + (boardY-y)*(boardY-y) <= radius*radius){
    speed = Math.sqrt(speedX*speedX + speedY*speedY);
    speedX = -speed*(boardX-x)/radius;
    speedY = -speed*(boardY-y)/radius;
    bricks += 1;
  }
 
  if ((hoopX-x)*(hoopX-x) + (hoopY-y)*(hoopY-y) <= (0.6*radius)*(0.6*radius) && speedY > 0){
    shotMade = 1;
    speedX = 0.3*speedX;
    
  }
  
  if (y < -200){
    skyBall = 1;
  }
  
  if (bricks > 0 && rims == 0 && y > hoopY && shotMade == 0 && textDisplay == 0){
    p5.textSize(64);
    p5.fill(0)
    p5.strokeWeight(3)
    p5.stroke(255, 0, 0)
    p5.textAlign(p5.CENTER)
    p5.text("Brick!", 300, y_start)
    p5.noFill()
  }
  
  if (rims == 1 && bricks == 2 && y > hoopY && shotMade == 0 && textDisplay == 0){
    p5.textSize(64);
    p5.fill(0)
    p5.strokeWeight(3)
    p5.stroke(255, 0, 0)
    p5.textAlign(p5.CENTER)
    p5.text("in-and-out", 300, y_start)
    p5.noFill()
  }
  
  if (rims > 1 && bricks > 1 && y > hoopY && shotMade == 0 && textDisplay == 0){
    p5.textSize(64);
    p5.fill(0)
    p5.strokeWeight(3)
    p5.stroke(255, 0, 0)
    p5.text("robbed...", 300, y_start)
    p5.noFill()
  }
  
  if (rims > 6){
    speedX = speedX +0.1;
  }
  
  if (textDisplay == 0 && bricks == 0 && rims == 0 && speedY > 4 && y < hoopY &&  y != y_start &&  shotMade == 0 && x > hoopX +3*radius/2){
    textDisplay = 1
  }
  
  if (rims > 0){
    textDisplay = 0
  }
  if (textDisplay == 1 &&  y > hoopY &&  shotMade == 0){
    p5.textSize(64);
    p5.fill(0)
    p5.strokeWeight(3)
    p5.stroke(255, 0, 0)
    p5.textAlign(p5.CENTER)
    p5.text("Air ball!", 300, y_start)
    p5.noFill()
  }
   // Draw the circle last!!!
   p5.fill(230,105,0)
   p5.stroke(0)
   p5.strokeWeight(1)
   p5.circle(x, y, radius*2)  // Draws a circle at (x,y,radius)
   p5.noFill()
   if (shotMade == 1){
     
     if (scoreCounted == 0){
       score += 1
       scoreCounted = 1
    if (rims === 0 && bricks === 0){
         endText = "Swish!"
       }
       if (bricks > 0){
         endText = "Nice Shot!"
       }
       if (rims > 0 &&  bricks < 2){
         endText = "Draino!"
       }
       if (rims > 0 &&  bricks >=2){
         endText = "Buckets!"
       }
       if (x_start < 75){
         endText = "Ballin'!"
       }
       if (tries > 10){
         endText = "Buzzer Beater!"
       }
       if (skyBall == 1){
         endText = "Sky Hook!"
       }
       if (tries == 1){
         endText = "First Try!"
         if (hotStreak == 1){
           endText = "Heatin' up!"
         }
         if (hotStreak == 2){
           endText = "On Fire!"
         }
         if (hotStreak == 3){
           endText = "Respect..."
         }
         if (hotStreak == 4){
           endText = "Wet!"
         }
         if (hotStreak == 5){
           endText = "Maybe pass sometimes"
         }
         if (hotStreak == 6){
           endText = "LeBron is that you!?"
         }
         if (hotStreak == 7){
           endText = "You're a wizard Harry!"
         }
         if (hotStreak == 8){
           endText = "Ur a legend"
         }
         if (hotStreak == 9){
           endText = "STOP. DROP. ROLL."
         }
         if (hotStreak == 10){
           endText = "Jesus is that you!?"
         }
         if (hotStreak == 11){
           endText = "U go hard in paint"
         }
         if (hotStreak > 11){
           endText = "LEGEND STATUS!"
         }
         hotStreak += 1;
       }
       else {
         hotStreak = 0
       }
     
     }
     
     p5.stroke(255)
     p5.strokeWeight(4);
     p5.line(hoopX-radius*3/2, hoopY , hoopX-radius, hoopY + 3*radius)
     p5.line(hoopX +radius, hoopY + 3*radius, hoopX + radius*3/2, hoopY)
     p5.line(hoopX + radius*3/2, hoopY, (hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2)
     p5.line(hoopX - radius*3/2, hoopY, (hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2)
     p5.line((hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2, hoopX +radius, hoopY + 3*radius)
     p5.line((hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2, hoopX -radius, hoopY + 3*radius)
     p5.stroke(0)
     p5.strokeWeight(1)
     p5.textSize(64);
     p5.fill(0)
     p5.strokeWeight(3)
     p5.stroke(255, 255, 0)
     p5.textAlign(p5.CENTER)
     p5.text(endText, 300, y_start)
     p5.noFill()
   }
   p5.stroke(0);
   p5.strokeWeight(4);
   p5.stroke(255,140,0)
   
   p5.arc(hoopX, hoopY, radius*3, radius/2, 2*p5.PI, p5.PI, p5.OPEN); 
   p5.stroke(0)
   p5.strokeWeight(1)
   
     
   
   if (p5.mouseIsPressed){
     rims = 0
     bricks = 0
     shoot = 0;
     textDisplay = 0;
     skyBall = 0;
     if (mouseJustPressed == 0){
       if (shotMade == 1){
         if (Math.floor(Math.random() * (0 - 1 + 1)) + 1 > 0.75){
           x = Math.floor(Math.random() * ((1.5*radius) -  (hoopX - 3*radius/2 - 2*radius) + 1)+(1.5*radius) );
         }
         else {
           x = Math.floor(Math.random() * ((1.5*radius) -  (hoopX - 3*radius/2 - 4*radius) + 1)+ (1.5*radius) );
         }
         
         x = Math.floor(Math.random() * (200 - (400 - 2*radius ) + 1)+200);
         y = Math.floor(Math.random() * (200 -  (400 - 2*radius)+1) +200);
         hoopY = Math.floor(Math.random() * (150 - 150 + 1)) + 100;
         hoopX = Math.floor(Math.random() * ((500-radius*2 )- 500 + 1)) + (500-radius*2);
        mouseJustPressed = 1;
         x_start = x
         y_start = y
         shotMade = 0
         tries = 0
       }
       else {
         mouseJustPressed = 1;
         x = x_start
         y = y_start
       }
     }
     
     p5.line(x_start, y_start, p5.mouseX, p5.mouseY)
   }
 }
 
 
 function mouseReleased() {
   if (mouseJustPressed == 1){
     shoot = 1;
     speedX = -g*5*(p5.mouseX - x_start)/30;
     speedY = -g*5*(p5.mouseY - y_start)/30;
     mouseJustPressed = 0;
     shotMade = 0;
     shots += 1
     scoreCounted = 0
     tries += 1;
     rims = 0
     bricks = 0
   }
   
  

  }
        };
    };
    return (
        <> 
            <Sketch setup={setup} sketch={sketch} />
        </>
    );

};
