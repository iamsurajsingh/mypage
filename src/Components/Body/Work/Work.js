import React from 'react';
import "./work.css";
import Separator from '../../Common/Separator/Separator';
import { workData } from '../../Data/work';
import WorkCard from './WorkCard';

function Work() {
    const data = workData;
    return (
        <div className = "work">
           <Separator/>
           <label className = "section-title">
               Work Experience
           </label>

           <div className = "work-list">
               {data.map((item) => {
                   return (
                       <WorkCard works = {item} />
                   );
               })}
           </div>
        </div>
    )
}

export default Work
