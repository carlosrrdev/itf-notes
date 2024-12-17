import * as React from 'react'
import {createLazyFileRoute} from '@tanstack/react-router'
import Markdown from "react-markdown"

export const Route = createLazyFileRoute('/$id')({
    component: RouteComponent,
})

function RouteComponent() {
    const {id} = Route.useParams()

    React.useEffect(() => {

        fetch(`/src/notes/${id}.md`)
            .then((response) => {
                if (!response.ok) {
                    console.log("error");
                    throw new Error("Failed to fetch the markdown file");
                }
                return response.text();
            })
            .then((markdown) => {
                setMarkdownContent(markdown);
            })
            .catch((error) => {
                console.error(error);
                setMarkdownContent("# Error: Unable to load content");
            });
    }, [id]);

    const [markdownContent, setMarkdownContent] = React.useState<string>("");

    return <Markdown className={"prose prose-slate dark:prose-invert"}>{markdownContent}</Markdown>;
}
