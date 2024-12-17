import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Markdown from 'react-markdown'

export const Route = createFileRoute('/$id')({
  loader: async ({ params }) => {
    const { id } = params
    try {
      // Use fetch or an import to get the markdown content
      const response = await fetch(`/notes/${id}.md`)

      if (!response.ok) {
        throw new Error('Failed to fetch markdown')
      }

      return {
        markdown: await response.text(),
      }
    } catch (error) {
      console.error(error)
      return {
        markdown: '# Error: Unable to load content',
      }
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { markdown } = Route.useLoaderData()

  return (
    <Markdown className={'prose prose-slate dark:prose-invert'}>
      {markdown}
    </Markdown>
  )
}
