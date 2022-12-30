import React from 'react'
import TimelineItem from './TimelineItem'
import { Link } from 'react-router-dom'
import WorkIcon from '../pictures/Logo.png';
import SchoolIcon from '../pictures/Logo.png';

import TimelineData from "../data/TimelineData.js";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <div>
        <h1 className="title">Timeline</h1>
        <VerticalTimeline>
          {TimelineData.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
  
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                  sadasd
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

    );
};

export default Timeline