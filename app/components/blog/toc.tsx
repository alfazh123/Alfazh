'use client'

import Link from "next/link";
import { useState } from "react"

interface Heading {
    text: string;
    level: number;
    slug: string;
}

interface HeadingsProps {
    headings: Heading[];
}

export function TOC ({ headings }: HeadingsProps) {
    return (
        <div className="flex flex-col">
                <ul className="md:space-y-6 space-y-4">
                    {headings.map((heading, id) => (
                        <li key={id} className={`flex hover:underline underline-offset-4 md:text-base text-sm`}>
                            <Link href={`#${heading.slug}`} className={`toc`}
                            style={{
                                    marginLeft: `${heading.level === 1 ? 0 : heading.level * 1}rem`,
                                    overflow: 'hidden',
                                    }}
                                    >{heading.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export function TOCMobile ({ headings }: HeadingsProps) {
    const [click, setClick] = useState(true)
    const [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!isOpen)
    }

    const handleClick = () => {
        setOpen(!open)
        setClick(!click)
    }

    return ( 
        <>
            <button className={`sm:text-2xl text-lg backdrop-blur-md font-bold md:hidden flex gap-2 items-center bg-slate100 dark:bg-black100 border border-slate300 dark:border-slate900 w-full py-2 px-4 rounded-lg`} onClick={() => handleOpen()}>
                <span className={`h-3 w-3 border-2 dark:border-slate200 border-slate900 ${isOpen ? `-rotate-45 border-t-0 border-r-0` : `rotate-45 border-b-0 border-l-0`} transition-all duration-500 ease-in-out`}></span>
                <span>Table Of Content</span>
            </button>
                {/* <TOCButton onClick={handleOpen} /> */}
            <span className={`md:hidden block rounded-lg mt-2 bg-slate100 dark:bg-black100 ${isOpen ? `sm:h-96 h-80 p-4 border border-slate300 dark:border-slate900` : null} rounded-b-lg overflow-y-scroll transition-all ease-in-out duration-700`} style={{
                scrollbarWidth: 'thin',
            }}>
                {isOpen && 
                    <div className="flex flex-col">
                        <ul className="md:space-y-6 space-y-4">
                            {headings.map((heading, id) => (
                                <li key={heading.slug} className={`flex hover:underline underline-offset-4 md:text-base text-sm`} onClick={() => handleClick()}>
                                    <Link href={`#${heading.slug}`} className={`toc`}
                                    style={{
                                            marginLeft: `${heading.level === 1 ? 0 : heading.level * 1}rem`,
                                            overflow: 'hidden',
                                            }}
                                            >{heading.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </span>
        </>
    )
}

export default function TableOfContents ({ headings }: HeadingsProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <span className="sticky top-20">
            {/* TOC in large screen */}
            <h1 className="text-2xl font-bold md:block hidden text-[#1e3a8a] dark:text-white mt-4">Table Of Content</h1>
            <span className="md:block hidden px-1 py-2">
                <TOC headings={headings} />
            </span>

            {/* TOC in small screen */}
            <TOCMobile headings={headings} />
        </span>
    )
}