import './Timeline.css'
import Titulo from '../../components/Titulo'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Timeline() {
  return (
    <section className="timeline">
      <Titulo texto="Educación y Experiencia" />
      <div className="timeline-wrapper">
        <VerticalTimeline>
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Timeline