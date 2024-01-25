import ReactDom from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from "./App"
import { QueryClient, QueryClientProvider } from "react-query";
import UserContextProvider from "./Context/UserContext"

let root = ReactDom.createRoot(document.getElementById("root"));
let queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <UserContextProvider>
            <App/>
        </UserContextProvider>
    </QueryClientProvider>
)