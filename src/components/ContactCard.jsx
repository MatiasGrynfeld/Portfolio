import './ContactCard.css'
import { motion } from 'framer-motion'

function ContactCard({ icon_path, href, index = 0 }) {
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
    <motion.a 
      href={href || '#'} 
      className="contact-card" 
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2 + index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      {...linkProps}
    >
      <img src={icon_path} alt="Contact icon"/>
    </motion.a>
  )
}

export default ContactCard