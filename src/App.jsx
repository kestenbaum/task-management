import Sidebar from "./components/Sidebar.jsx";
import Form from "./components/Form.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
    return (
        <main className="h-screen flex gap-8">
            <Sidebar/>
            <NoProjectSelected/>
        </main>
    );
}

export default App;
