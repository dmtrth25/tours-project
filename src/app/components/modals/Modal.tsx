"use client"

import { FC, useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
interface IModalProps {
  isOpen?: boolean
  disabled?: boolean
  onClose: () => void
  onSubmit: () => void
  nextAction?: () => void
  title?: string
}

const Modal: FC<IModalProps> = ({
  isOpen,
  disabled,
  onClose,
  onSubmit,
  nextAction,
  title,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300) // some animation
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }

    onSubmit()
  }, [])

  const handleNextAction = useCallback(() => {
    if (disabled || !nextAction) {
      return
    }

    nextAction()
  }, [disabled, nextAction])

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/*Content*/}
          <div
            className={`
            translate
            duration-300 
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*Header*/}
              <div className="flex justify-center items-center p-6 rounded-t relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
