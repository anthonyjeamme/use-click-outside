import React, { useRef } from 'react'

import { useClickOutside } from 'use-click-outside'
import 'use-click-outside/dist/index.css'

const App = () => {
  const rootRef = useRef<HTMLDivElement>()
  const [isOpen, setIsOpen] = React.useState(false)

  useClickOutside(isOpen, setIsOpen, rootRef)

  return (
    <div
      style={{
        padding: 20
      }}
    >
      <div
        style={{ background: '#eeeeee', padding: 10, position: 'relative' }}
        // @ts-ignore
        ref={rootRef}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          Open / close
        </button>

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              padding: 10,
              borderRadius: 4
            }}
          >
            Sub menu !
          </div>
        )}
      </div>
    </div>
  )
}

export default App
