import Sketch from 'react-p5'


function Resume() {

    let x; 
    let y;
    let xspeed;
    let yspeed;

    let x1;
    let y1;
    let x1speed;
    let y1speed;

    let x2;
    let y2;
    let x2speed;
    let y2speed;
    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(600, 600).parent(canvasParentRef);

      x = 100; 
      y = 200;
      xspeed = -5;
      yspeed = 3;

      x1 = 400;
      y1 = 200;
      y1speed = 4;
      x1speed = -5;

      x2 = 500;
      y2 = 400;
      y2speed = 2;
      x2speed = -3;

      p5.frameRate(30);

    }
    const draw = (p5) => {
      p5.clear();
      p5.square(x, y, 50, 2);
      p5.square(x1, y1, 50, 2);
      p5.square(x2, y2, 50, 2);

      x = x + xspeed;
      y = y + yspeed;
      x1 = x1 + x1speed;
      y1 = y1 + y1speed;
      x2 = x2 + x2speed;
      y2 = y2 + y2speed;
      

      if (x + 50 >= p5.width) {
        xspeed = -xspeed;
        x = x - 5;
      } else if ( x <= 0) {
        xspeed = -xspeed;
        x = 0;
      }

      if (y + 50 >= p5.height) {
        yspeed = -yspeed;
        y = y - 5;
      } else if ( y <= 0) {
        yspeed = -yspeed;
        y = 0;
      }

      if (x1 + 50 >= p5.width) {
        x1speed = -x1speed;
        x1 = x1 - 5;
      } else if ( x1 <= 0) {
        x1speed = -x1speed;
        x1 = 0;
      }

      if (y1 + 50 >= p5.height) {
        y1speed = -y1speed;
        y1 = y1 - 5;
      } else if ( y1 <= 0) {
        y1speed = -y1speed;
        y1 = 0;
      }
      
      if (x2 + 50 >= p5.width) {
        x2speed = -x2speed;
        x2 = x2 - 5;
      } else if ( x2 <= 0) {
        x2speed = -x2speed;
        x2 = 0;
      }

      if (y2 + 50 >= p5.height) {
        y2speed = -y2speed;
        y2 = y2 - 5;
      } else if ( y2 <= 0) {
        y2speed = -y2speed;
        y2 = 0;
      }

      const cycleIcon = () => {

      }

    //   Collision detected that kinda worked, cooler in theory, maybe in the future
    //   if ( x1 <= x+50 && x1 >= x-50 && y1 <= y+50 && y1 >= y-50) {
    //     let dx = x1 - x;
    //     let dy = y1 - y;
    //     if (dx > dy) {
    //         if ( x > x1 ){
    //             x = x+5; x1 = x1-5;
    //         } else {
    //             x = x-5; x1 = x1+5;
    //         }
    //         xspeed = -xspeed;
    //         x1speed = -x1speed;
    //     } else {
    //         if ( y > y1 ){
    //             y = y+5; y1 = y1-5;
    //         } else {
    //             y = y-5; y1 = y1+5;
    //         }
    //         yspeed = -yspeed;
    //         y1speed = -y1speed;
    //     }
    //   }
    }
    
    return (
        <div>
            <Sketch setup={setup} draw={draw} key={1}/>
            <p>Here you can download my <a href="">resume</a></p>
            <h4>Front-End Proficiencies</h4>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <h4>Back-End Proficiencies</h4>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Resume;