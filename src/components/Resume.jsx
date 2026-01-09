import { front_end, back_end, other } from './../../assets/proficiencies';
import React from 'react';
import Logo from './Logos/Logo';

import resume from './../../assets/Adam_Boudraa_Resume.pdf';

function Resume() {
    
    console.log(front_end[0].path);

    return (
        <div>
          <h3 className='page-header h-font resume'>Resume</h3>
            <h6 className='resume-link'>Click here to download a copy of <a download="Adam_Boudraa_Resume" href={resume}>my resume</a>.</h6>
            <div className='proficiencies'>
              <div className='front-end'>
                <h4>Front-End Proficiencies</h4>
                <ul>
                    {front_end.map((skill) => (
                      <li key={skill.id}> <Logo name={skill.name} />   {skill.name}</li>
                    ))}
                </ul>
              </div>
              <div className='back-end'>
                <h4>Back-End Proficiencies</h4>
                <ul>
                    {back_end.map((skill) => (
                      <li key={skill.id}> <Logo name={skill.name} /> {skill.name}</li>
                    ))}
                </ul>
              </div>
              <div className='other-skills'>
                <h4>Other Skills</h4>
                <ul>
                    {other.map((skill) => (
                      <li key={skill.id}> <Logo name={skill.name} /> {skill.name}</li>
                    ))}
                </ul>  
              </div>
            </div>
        </div>
    )
}

export default Resume;