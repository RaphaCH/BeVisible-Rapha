import Card from "../../components/Card";
import SearchBarWithFilter from "../../components/NavBars/SearchBarWithFilter";


export default function Gallery() {
    return (
        <>
            <SearchBarWithFilter />
            <section className="flex flex-row justify-center flex-wrap">
                <div className="mx-5">
                    <Card />
                </div>
                <div className="mx-5">
                    <Card />
                </div>
                <div className="mx-5">
                    <Card />
                </div>
                
            </section>
        </>
    )
}