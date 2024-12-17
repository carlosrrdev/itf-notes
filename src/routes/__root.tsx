import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className={"w-full min-h-dvh flex flex-col"}>
          <header className={"container mx-auto p-6 flex justify-center"}>
              <Link className={"text-2xl font-bold"} to="/">ITF+ Notes</Link>
          </header>
          <main className={"flex-1 container mx-auto p-6"}><Outlet /></main>
          <footer className={"container mx-auto p-6 flex justify-center"}>
              <small className={"opacity-50"}>&copy; 2024 - Created by Carlos Rodriguez</small>
          </footer>
      </div>
    </>
  )
}
