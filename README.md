# How to use

```tsx
const Component = () => {
  const rootRef = useRef<HTMLDivElement>()
  const [isOpen, setIsOpen] = React.useState(false)

  useClickOutside(isOpen, setIsOpen, rootRef)

  return (
    <div ref={rootRef}>
      <button>{isOpen ? 'Open dropdown' : 'Close dropdown'}</button>

      {isOpen && <MyDropdown />}
    </div>
  )
}
```
