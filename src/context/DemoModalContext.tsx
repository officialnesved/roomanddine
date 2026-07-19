import { createContext, useContext, useState, type ReactNode } from 'react'
import { Modal } from '../components/Modal'
import { DemoForm } from '../components/DemoForm'

const DemoModalContext = createContext<() => void>(() => {})

export function useDemoModal() {
  return useContext(DemoModalContext)
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <DemoModalContext.Provider value={() => setOpen(true)}>
      {children}
      <Modal open={open} onClose={() => setOpen(false)} title="Book a Demo">
        <p className="mb-4 text-sm text-slate-500">Tell us a bit about your property — we'll walk you through RoomAndDine live.</p>
        <DemoForm onDone={() => setTimeout(() => setOpen(false), 1800)} />
      </Modal>
    </DemoModalContext.Provider>
  )
}
