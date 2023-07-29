import React from "react";



export default function Cards(props : any) {
    return (
        <>
<div className="w-1/3 text-slate-700 dark:text-white flex flex-col items-center flex-wrap ">
    <div className="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
        <div
            className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md"
        >
            <div
                className="rounded-t-xl w-full h-64 shadow-sm bg-cover"
                style={{
                    backgroundImage: `url(${props.img})`,
                }}
            ></div>

            <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
                    {props.name}
                </h1>
                <p className="text-sm">{props.description}</p>

                <div className="flex mt-4">
                    <a href={props.link} target="_blank">
                    <button
                        
                        className="transition-all duration-100 text-center p-2 rounded-md text-white w-full bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:from-blue-800 hover:to-blue-600"
                    >
                        visit on github
                    </button>
                    </a>

                    <div className="flex flex-col ml-4 w-1/2">
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
    </div>
</div>
        </>
    )

}