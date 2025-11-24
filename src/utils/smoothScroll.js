export const smoothScrollTo = (targetY, duration = 1000) => {
  const start = window.scrollY
  const distance = targetY - start
  const startTime = performance.now()

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = easeInOutCubic(progress)

    window.scrollTo(0, start + distance * easeProgress)

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}

export const scrollToElement = (elementId, duration = 1000, callback) => {
  const element = document.getElementById(elementId)
  if (element) {
    const targetY = element.getBoundingClientRect().top + window.scrollY
    smoothScrollTo(targetY, duration)
    
    if (callback) {
      setTimeout(callback, duration)
    }
  }
}
