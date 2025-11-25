import './ContactCard.css'

function ContactCard({ icon_path, href }) {
  const isExternal = href && href.startsWith('http')
  const isMailto = href && href.startsWith('mailto')
  
  const linkProps = isExternal 
    ? { target: '_blank', rel: 'noopener noreferrer' } 
    : {}

  const handleClick = (e) => {
    if (!href || href === '#') {
      e.preventDefault()
    }
  }

  return (
    <a 
      href={href || '#'} 
      className="contact-card" 
      onClick={handleClick}
      {...linkProps}
    >
      <img src={icon_path} alt="Contact icon"/>
    </a>
  )
}

export default ContactCard