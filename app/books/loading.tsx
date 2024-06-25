export default function Loading() {
    return(
        <div className="pt-32 px-8 space-y-4">
            <div className="bg-slate300 dark:bg-slate700 w-24 h-12 animate-pulse rounded-md"></div>
            <ul className="grid md:grid-cols-2 justify-center items-center mx-auto gap-4">
                <li className="w-full h-72 space-y-2">
                    <p className="bg-slate300 dark:bg-slate700 max-w-96 h-8 rounded-md animate-pulse"></p>
                    <p className="bg-slate300 dark:bg-slate700 max-w-96 h-8 rounded-md animate-pulse"></p>
                    <p className="bg-slate300 dark:bg-slate700 max-w-96 h-8 rounded-md animate-pulse"></p>
                </li>
                <li className="w-full h-72 bg-slate300 dark:bg-slate700 rounded-md animate-pulse"></li>
                <li className="w-full h-72 bg-slate300 dark:bg-slate700 rounded-md animate-pulse"></li>
                <li className="w-full h-72 bg-slate300 dark:bg-slate700 rounded-md animate-pulse"></li>
            </ul>
        </div>
    )
}