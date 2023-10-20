import React from "react";



export default function Cards(props : any) {
    return (
        <>
<div className="max-w-2xl mx-auto py-6">
    
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-900 dark:border-blue-700">
        <a target="_blank" href={props.link}>
            <img className="rounded-t-lg" src={props.img} alt="project photo"/>
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{props.name}</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{props.description}</p>
            <a target="_blank"href={props.link} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                visit on github
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <div className="flex flex-row w-100">
                        <h2 className="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                            {props.lang}
                        </h2>

                        <span className="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                            {props.time}
                        </span>
                    </div>
        </div>
    </div>

</div>
        </>
    )

}