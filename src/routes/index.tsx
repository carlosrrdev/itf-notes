import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className={""}>
      <h3>Welcome Home!</h3>
        <Link to="/$id" params={{id: "hello-world"}}>hello world</Link>
    </div>
  )
}
