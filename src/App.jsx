import Button from "./components/Button.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Form from "./components/Form.jsx";

function App() {
    return (
        <main className="h-screen flex gap-8">
            <Sidebar/>
            <Form/>
        </main>
    );
}

export default App;
