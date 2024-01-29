import React from 'react'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0, 0, 0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '75vh',
    width: '100vh',
    backgroundColor: '#D1D1D1',
    borderRadius: '10px',
    color: 'black',    
}

const MODAL_STYLE_MOBILE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '90vh',
    width: '50vh',
    backgroundColor: '#D1D1D1',
    borderRadius: '10px',
    color: 'black',    
}

export default function Modal({isOpen, modalMobile, setModalOpen, children}) {
    
    if(modalMobile) {
        if (isOpen) {
            return (
                <div style={BACKGROUND_STYLE}>
                    <div style={MODAL_STYLE_MOBILE}>
                        <button onClick={setModalOpen} className={`fixed right-0 top-0 
                            mt-3 mr-5  px-2 rounded-sm bg-red-700`}>X</button>
                        <div className='flex justify-center items-center h-full p-2'>
                            {children}
                        </div>
                    </div>
                </div>
            )
        }    
    } else {
        if (isOpen) {
            return (
                <div style={BACKGROUND_STYLE}>
                    <div style={MODAL_STYLE}>
                        <button onClick={setModalOpen} className={`fixed right-0 top-0 
                            mt-3 mr-5  px-2 rounded-sm bg-red-700`}>X</button>
                        <div className='flex justify-center items-center h-full p-2'>
                            {children}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return null
}