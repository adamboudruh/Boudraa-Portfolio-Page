import Sketch from 'react-p5'
import { front_end, back_end, other } from '../assets/proficiencies';
import { useEffect, useState } from 'react';

function Resume() {

    const [frontIndex, setFront] = useState(0);
    const [backIndex, setBack] = useState(0);
    const [otherIndex, setOther] = useState(0);

    useEffect(() => {
      loadIcons();
    }, []);

    const loadIcons = () => {
      const frontImg = new Image();
      frontImg.src = front_end[frontIndex].path;
      frontImg.onload = () => {
        setFront((prevIndex) => (prevIndex + 1) % front_end.length);
      };

      const backImg = new Image();
      backImg.src = back_end[backIndex].path;
      backImg.onload = () => {
        setBack((prevIndex) => (prevIndex + 1) % back_end.length);
      };

      const otherImg = new Image();
      otherImg.src = other[otherIndex].path;
      otherImg.onload = () => {
        setOther((prevIndex) => (prevIndex + 1) % other.length);
      };

    
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

    let frontIcon, backIcon, otherIcon;

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
      p5.square(frontIcon, x, y, 50, 2);
      p5.square(backIcon, x1, y1, 50, 2);
      p5.square(otherIcon, x2, y2, 50, 2);

      x = x + xspeed;
      y = y + yspeed;
      x1 = x1 + x1speed;
      y1 = y1 + y1speed;
      x2 = x2 + x2speed;
      y2 = y2 + y2speed;
      
      checkCollisionAndUpdateIndex(p5, x, y, setFront, frontIndex, front_end.length, 'front');
      checkCollisionAndUpdateIndex(p5, x1, y1, setBack, backIndex, back_end.length, 'back');
      checkCollisionAndUpdateIndex(p5, x2, y2, setOther, otherIndex, other.length, 'other');
    };
  
    const checkCollisionAndUpdateIndex = (p5, posX, posY, setIndex, currentIndex, length, type) => {
      if (posX + 50 >= p5.width || posX <= 0) {
        if (type === 'front') xspeed = -xspeed;
        if (type === 'back') x1speed = -x1speed;
        if (type === 'other') x2speed = -x2speed;
        setIndex((prevIndex) => (prevIndex + 1) % length);
      }
  
      if (posY + 50 >= p5.height || posY <= 0) {
        if (type === 'front') yspeed = -yspeed;
        if (type === 'back') y1speed = -y1speed;
        if (type === 'other') y2speed = -y2speed;
        setIndex((prevIndex) => (prevIndex + 1) % length);
      }
    };
    

    return (
        <div>
          <h3 className='page-header h-font'>Resume</h3>
            <Sketch setup={setup} draw={draw} key={1}/>
            <p>Here you can download my <a href="">resume</a></p>
            <h4>Front-End Proficiencies</h4>
            <ul>
                {front_end.map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
            <h4>Back-End Proficiencies</h4>
            <ul>
                {back_end.map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
            <h4>Other Skills</h4>
            <ul>
                {other.map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
        </div>
    )
}

}

export default Resume;