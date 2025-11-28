'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const BOOK_FLIP_DURATION = 1100

export default function MiriamLayout({ children }) {
  const pathname = usePathname()
  const [activePath, setActivePath] = useState(pathname)
  const [currentPage, setCurrentPage] = useState(children)
  const previousPageRef = useRef(children)
  const [flipPages, setFlipPages] = useState(null)

  useEffect(() => {
    if (pathname === activePath) {
      previousPageRef.current = children
      setCurrentPage(children)
      return
    }

    const outgoing = previousPageRef.current
    const incoming = children

    setFlipPages({ outgoing, incoming })

    const timeoutId = setTimeout(() => {
      setCurrentPage(incoming)
      previousPageRef.current = incoming
      setFlipPages(null)
      setActivePath(pathname)
    }, BOOK_FLIP_DURATION)

    return () => clearTimeout(timeoutId)
  }, [children, pathname, activePath])

  const isFlipping = Boolean(flipPages)

  return (
    <div className="miriam-book-shell">
      <div className={`miriam-book__content ${isFlipping ? 'miriam-book__content--hidden' : ''}`}>
        {currentPage}
      </div>

      {flipPages && (
        <>
          <div className="miriam-book__incoming">
            {flipPages.incoming}
          </div>
          <div className="miriam-book__page-flip" aria-hidden="true">
            <div className="miriam-book__page-face miriam-book__page-face--front">
              {flipPages.outgoing}
            </div>
            <div className="miriam-book__page-face miriam-book__page-face--back">
              {flipPages.incoming}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
