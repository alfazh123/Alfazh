import ArtCard from "./art-card-date";

interface ListArtProps {
    Props: {
        art: string[];
        date: string[];
    };
}

export default function ListArt({ Props }: ListArtProps) {
    return (
        <div>
            {/* <div className="lg:columns-4 sm:columns-3 columns-2 gap-4 space-y-4"> */}
            <div className="flex flex-wrap gap-4 justify-center">
                {Props.art.map((art, id) => (
                    <div className={``} key={id}>
                        <ArtCard
                            art={{
                                image: art,
                            }}
                            date={{
                                date: Props.date[id],
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
