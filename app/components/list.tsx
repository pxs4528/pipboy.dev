import React from "react";
import mobi from "../../public/mobi.jpg";
import acm from "../../public/acm.jpg";
import git from "../../public/github.svg";
import devpost from "../../public/devpost.svg";
import Link from "next/link";
import styles from "../page.module.css";
export default function List(props : any) {
    return (
        <>
<div className="max-w-2xl mx-auto">

	<div className="p-4 w-100 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-900 dark:border-blue-700">
    <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Clubs/Orgs</h3>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={git.src} alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            GitHub
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            All-in Student Program Member
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        Remote, 2022 - 2023
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={mobi.src} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            MOBI (Mobile App Development)
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            WorkShop Officer and Community Manger
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        UTA, 2021 - Present
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={acm.src} alt="Bonnie image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            ACM (Association for Computing Machinery)
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Educate Officer, HackUTA Tech Officer
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        UTA, 2022 - Present
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={devpost.src} alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            <Link target="_blank" className={styles.here} href="https://devpost.com/pxs4528">Devpost</Link>
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            <a target="_blank" rel="noopener" href="https://devpost.com/pxs4528">Hackathon Projects</a>
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        2022 - Present
                    </div>
                </div>
            </li>
           
        </ul>
   </div>
</div>
	
</div>
        </>
    )
}