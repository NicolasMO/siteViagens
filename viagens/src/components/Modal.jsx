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
    height: '500px',
    width: '700px',
    backgroundColor: '#D1D1D1',
    borderRadius: '10px',
    color: 'black',    
}

export default function Modal({isOpen, setModalOpen, children}) {

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

    return null
}