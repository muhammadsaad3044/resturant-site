import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo/logo.png'

const MIN_LOADER_TIME = 1200

function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const startedAt = performance.now()
    let hideTimer
    let removeTimer

    const finishLoading = () => {
      const elapsed = performance.now() - startedAt
      const remaining = Math.max(MIN_LOADER_TIME - elapsed, 0)

      hideTimer = window.setTimeout(() => {
        setIsLeaving(true)
        removeTimer = window.setTimeout(() => {
          setIsVisible(false)
        }, 380)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      finishLoading()
      return undefined
    }

    window.addEventListener('load', finishLoading, { once: true })

    return () => {
      window.removeEventListener('load', finishLoading)
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={`page-loader${isLeaving ? ' page-loader--leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading restaurant website"
    >
      <div className="page-loader__plate" aria-hidden="true">
        <span className="page-loader__orbit page-loader__orbit--one" />
        <span className="page-loader__orbit page-loader__orbit--two" />
        <span className="page-loader__orbit page-loader__orbit--three" />
        <span className="page-loader__steam page-loader__steam--one" />
        <span className="page-loader__steam page-loader__steam--two" />
        <span className="page-loader__steam page-loader__steam--three" />
        <img src={logo} alt="" className="page-loader__logo" />
      </div>
      <p className="page-loader__text">Preparing your table</p>
      <div className="page-loader__bar" aria-hidden="true">
        <span />
      </div>
    </div>
  )
}

export default PageLoader
