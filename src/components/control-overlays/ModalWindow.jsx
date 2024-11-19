import clsx from "clsx";


export default function ModalWindow({isVisible, onClose, title, children}) {

    if(!isVisible) return null;

    return(
        <>
            <div className={clsx("fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 transition-opacity duration-600 flex items-center justify-center z-50",
                {
                    "opacity-0 pointer-events-none": !isVisible,
                    "opacity-100": isVisible,
                })}
                 onClick={onClose}
            >
                <div className={clsx("flex-col overflow-auto transform transition-transform duration-300 bg-neutral-50 shadow-md border-neutral-300 rounded-lg border-2",
                    {
                        "scale-100": isVisible,
                        "scale-90": !isVisible,
                    })}
                     onClick={(e)=> e.stopPropagation()}>

                    <div className="flex flex-row justify-between items-center p-4 border-b-2">
                        <h1 className="text-xl text-bold text-center">{title}</h1>
                        <button className="w-8 h-8" onClick={onClose}>
                            <img className="w-full h-auto" src="/icons/close.svg" alt="Close"/>
                        </button>
                    </div>
                    <div className=" border-neutral-300">
                        {children}
                    </div>

                </div>

            </div>
        </>
    )
}