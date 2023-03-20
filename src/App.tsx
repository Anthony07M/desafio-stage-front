import { Menu } from "./components/header"
import { RoutesProvider } from "./routes/index.routes"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <div className="app">
      <GlobalStyle/>
      <Menu/>
      <RoutesProvider/>
    </div>
  )
}