export function ImageSkeleton() {
    return <div className="animate-pulse bg-gray-300 rounded-md"></div>;
}

export function SkeletonHeaderHomePage() {
    return(
        <div>
            <div className="h-10 bg-slate400 dark:bg-slate700 w-5/6 animate-pulse"></div>
        </div>
    )
}

export function SkeletonProjectCard() {
    return (
        <div className="animate-pulse bg-slate300 dark:bg-slate600 rounded-md w-full h-80 p-4">
            <div className="h-40 bg-slate200"></div>
            <div className="h-4 w-1/2 mt-2 bg-slate200"></div>
            <div className="h-4 w-1/3 mt-2 bg-slate200"></div>
            <div className="h-4 w-1/4 mt-2 bg-slate200"></div>
        </div>
    );
}

export function SkeletonProjectPage() {
    return (
        <div className="px-8 pt-32 space-y-10">
            <div className="bg-slate300 text-slate300 dark:bg-slate700 dark:text-slate700 h-20 p-2">Project</div>

            <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                <li><SkeletonProjectCard/></li>
                <li><SkeletonProjectCard/></li>
                <li><SkeletonProjectCard/></li>
                <li><SkeletonProjectCard/></li>
            </ul>
        </div>
    )
}

export function SkeletonBlogCard() {
    return (
        <div className="animate-pulse bg-slate300 dark:bg-slate600 rounded-md h-20 p-4">
            <div className="h-4 w-1/2 mt-2 bg-slate200"></div>
            <div className="h-4 w-1/3 mt-2 bg-slate200"></div>
        </div>
    )
}

export function SkeletonBlogPage() {
    return(
        <div className="px-4 pt-24 space-y-2">
            <div className="bg-slate300 h-14 w-48 rounded-md animate-pulse"></div>
            <div className="bg-slate300 h-12 w-full rounded-md animate-pulse"></div>
            <ul className="flex gap-4 overflow-hidden">
                <li className="bg-slate300 h-8 rounded-md w-16 animate-pulse"></li>
                <li className="bg-slate300 h-8 rounded-md w-16 animate-pulse"></li>
                <li className="bg-slate300 h-8 rounded-md w-16 animate-pulse"></li>
                <li className="bg-slate300 h-8 rounded-md w-16 animate-pulse"></li>
            </ul>

            <ul className="space-y-2">
                <li><SkeletonBlogCard/></li>
                <li><SkeletonBlogCard/></li>
                <li><SkeletonBlogCard/></li>
                <li><SkeletonBlogCard/></li>
            </ul>
        </div>
    )
}

export function SkeletonBlogContent() {
    return (
        <div className="px-4 pt-24">
            <div className="max-w-[800px] mx-auto px-20">
                <div className="space-y-4">
                    <div className="bg-slate200 h-20 animate-pulse rounded-md"></div>
                    <div className="bg-slate200 h-4 w-10 animate-pulse rounded-md"></div>
                </div>

                <div className="space-y-4 mt-20 w-3/4">
                    <div className="bg-slate200 h-8 animate-pulse rounded-md mx-auto"></div>
                    <div className="bg-slate200 h-4 animate-pulse rounded-md mx-auto"></div>
                    <div className="bg-slate200 h-4 animate-pulse rounded-md mx-auto"></div>
                    <div className="bg-slate200 h-4 animate-pulse rounded-md mx-auto"></div>
                    <div className="bg-slate200 h-4 animate-pulse rounded-md mx-auto w-3/4 justify-start"></div>
                </div>
            </div>
        </div>
    )
}

export function SkeletonArtCard() {
    return (
        <div className="animate-pulse lg:w-56 lg:h-56 w-52 h-52 bg-slate300 dark:bg-slate600 rounded-md p-4">
            {/* <div className="h-40 bg-slate300"></div> */}
        </div>
    );

}

export function SkeletonArtPage() {
    return (
        <div className="px-8 pt-32 space-y-4">
            <div className="space-y-10">
                <div className="h-20 p-2 bg-slate300 dark:bg-slate700 text-slate300 dark:text-slate700 rounded-md animate-pulse">Art & Photography</div>
                <div className="h-12 w-full bg-slate300 dark:bg-slate700 rounded-md animate-pulse"></div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <SkeletonArtCard/>
                <SkeletonArtCard/>
                <SkeletonArtCard/>
                <SkeletonArtCard/>
                <SkeletonArtCard/>
                <SkeletonArtCard/>
            </div>
        </div>
    )
}