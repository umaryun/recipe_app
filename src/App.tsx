import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import NavBar from "./components/NavBar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <div>
          <NavBar />
          
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
