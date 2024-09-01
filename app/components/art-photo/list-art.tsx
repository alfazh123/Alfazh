import ArtCard from "./art-card-date";
import type { ListArtProps } from "@/app/lib/utils";


export default function ListArt({ Props }: ListArtProps) {
    return (
        <div>
            {/* <div className="lg:columns-4 sm:columns-3 columns-2 gap-4 space-y-4"> */}
            <div className="flex flex-wrap gap-4 justify-center">
                {Props.map((art, id) => (
                    <div className={``} key={id}>
                        <ArtCard {...art}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
