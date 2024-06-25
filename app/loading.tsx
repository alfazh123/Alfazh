import { SkeletonHeaderHomePage } from "./components/skeleton"

export default function Loading() {
    return (
        <div className="flex h-screen justify-center items-center">
            <SkeletonHeaderHomePage />
        </div>
    )
}