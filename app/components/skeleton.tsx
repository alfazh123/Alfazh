export function ImageSkeleton() {
    return <div className="animate-pulse bg-gray-300 rounded-md"></div>;
}

export function SkeletonHeaderHomePage() {
    return(
        <div>
            <div className="h-10 bg-slate600 dark:bg-slate700 w-5/6 animate-pulse">Loading...</div>
        </div>
    )
}

export function SkeletonProjectCard() {
    return (
        <div className="animate-pulse bg-slate200 dark:bg-slate600 rounded-md h-80 p-4">
            <div className="h-40 bg-slate300"></div>
            <div className="h-4 w-1/2 mt-2 bg-slate300"></div>
            <div className="h-4 w-1/3 mt-2 bg-slate300"></div>
            <div className="h-4 w-1/4 mt-2 bg-slate300"></div>
        </div>
    );
}

export function SkeletonBlogCard() {
    return (
        <div className="animate-pulse bg-slate200 dark:bg-slate600 rounded-md h-20 p-4">
            <div className="h-4 w-1/2 mt-2 bg-slate300"></div>
            <div className="h-4 w-1/3 mt-2 bg-slate300"></div>
        </div>
    )
}

export function SkeletonBlogContent() {
    return (
        <div className="max-w-[800px] mx-auto">
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
    )
}