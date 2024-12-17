import * as React from 'react'
import {createFileRoute, Link} from '@tanstack/react-router'
import {Trail} from "../components/Trail";
import {formatAndGeneratePaths, Paths} from "../util/formatAndGeneratePaths";

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {


    const [paths, setPaths] = React.useState<Array<Paths>>([]);

    React.useEffect(() => {
        fetch('./paths.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch paths.json');
                }
                return response.json();
            })
            .then((data) => {
                const newPaths = formatAndGeneratePaths(data)
                setPaths(newPaths);
            })
            .catch((error) => {
                console.error('Error fetching the JSON data:', error);
            });
    }, []);


    return (
        <div className={"flex flex-col items-center justify-center"}>
            <h3 className={"text-3xl font-bold"}>IT Fundamentals Personal Notes</h3>
            <p className={"mb-12"}>This is a collection of my notes in preparation for the ITF+ Certification</p>
            <Trail>
                {paths.map((path) => (
                    <Link key={path.id} className={"px-8 py-4 rounded bg-sky-500/10 " +
                        "flex justify-center transition-colors ease-in-out hover:bg-sky-500/30"}
                          to={"/$id"}
                          params={{id: path.path}}>
                        {path.formattedString}
                    </Link>
                ))}
            </Trail>
        </div>
    )
}
