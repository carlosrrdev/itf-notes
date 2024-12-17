import * as React from 'react'
import {createLazyFileRoute} from '@tanstack/react-router'
import Markdown from "react-markdown"

export const Route = createLazyFileRoute('/$id')({
    component: RouteComponent,
})

function RouteComponent() {
    const {id} = Route.useParams()

    React.useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(`/src/notes/${id}.md`);
                if (!response.ok) {
                    throw new Error("Failed to fetch the markdown file");
                }
                const markdown = await response.text();
                setMarkdownContent(markdown);
            } catch (error) {
                console.error(error);
                setMarkdownContent("# Error: Unable to load content");
            }
        };

        fetchMarkdown();
    }, [id]);

    const [markdownContent, setMarkdownContent] = React.useState<string>("");

    return <Markdown className={"prose"}>{markdownContent}</Markdown>;
}
