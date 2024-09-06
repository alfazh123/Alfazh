const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="space-y-4">
            {children}
        </section>
    )
}

const Header1 = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className="font-bold md:text-4xl text-3xl">
            {children}
        </header>
    )
}

const Header4 = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className="font-bold md:text-xl text-lg">
            {children}
        </header>
    )
}

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="space-y-4">
            {children}
        </div>
    )
}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="md:text-xl text-lg">
            {children}
        </p>
    )
}

const List = ({ list }: { list: string[] }) => {
    return (
        <ul className="list-none list-inside flex flex-wrap gap-2">
            {list.map((item, id) => (
                <li key={id+item} className="bg-slate100 text-base px-1 rounded-md border-2 border-slate200 dark:bg-black dark:bg-opacity-35 dark:border-2 dark:border-slate900">{item}</li>
            ))}
        </ul>
    )
}

Section.Header1 = Header1;
Section.Header4 = Header4;
Section.Container = Container;
Section.Paragraph = Paragraph;
Section.List = List;

export default Section;