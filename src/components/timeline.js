import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaSchool } from "react-icons/fa";

function timeline(){
    return(
        <>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Denver Website Designs</h4>
    {/* <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement> */}
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="July 2020 - December 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h4 className="vertical-timeline-element-title">Full Stack Web Development Teaching Assistant</h4>
    <h5 className="vertical-timeline-element-subtitle">Trilogy Education Services</h5>
    {/* <p>
      User Experience, Visual Design
    </p> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2020 - December 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h4 className="vertical-timeline-element-title">Senior Full Stack Web Development Tutor</h4>
    <h5 className="vertical-timeline-element-subtitle">Trilogy Education Services</h5>
    {/* <p>
      Strategy, Social Media
    </p> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="December 2019 - March 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h4 className="vertical-timeline-element-title">Full Stack Web Development Certificate</h4>
    <h5 className="vertical-timeline-element-subtitle">University of Denver</h5>
    {/* <p>
      Creative Direction, User Experience, Visual Design
    </p> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2006 - 2010"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h4 className="vertical-timeline-element-title">Bachelor of Arts in Communication</h4>
    <h5 className="vertical-timeline-element-subtitle">University of Colorado at Boulder</h5>
    
  </VerticalTimelineElement>
  
</VerticalTimeline>
        </>
    )
}

export default timeline
