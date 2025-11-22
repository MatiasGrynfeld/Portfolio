import './ContactCard.css'

function ContactCard({ icon_path, href }) {
  return (
    <a href={href} className="contact-card">
      <img src={icon_path}/>
    </a>
  )
}

export default ContactCard