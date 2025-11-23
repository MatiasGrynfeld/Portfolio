import './Timeline.css'
import Titulo from '../../components/Titulo'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useState, useEffect } from 'react'

function Timeline() {
  const [timelineData, setData] = useState({ elements: [] })

  useEffect(() => {
    fetch('/jsons/timeline.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading timeline.json:', error))
  }, [])

  return (
    <section className="timeline" id="edu-exp">
      <Titulo texto="Educación y Experiencia" />
      <div className="timeline-wrapper">
        <VerticalTimeline>
          {timelineData.elements.map((element) => (
            <VerticalTimelineElement
              key={element.id}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <h5 className='vertical-timeline-element-subtitle'>{element.date}</h5>
              <p>{element.description}</p>
              {element.button && (
                <button className="timeline-button">
                  <span className="boton-texto">{element.button}</span>
                  <span className="boton-flechas">{">>"}</span>
                </button>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Timeline