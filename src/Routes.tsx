import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { NewList } from "./pages/NewList"
import { ConfigLists } from "./pages/ConfigLists"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new-list" element={<NewList />} />
            <Route path="/config-lists" element={<ConfigLists />} />
            <Route path="*" element={<NotFound />} />
        </ReactRoutes>
    )
}
