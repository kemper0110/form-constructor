import React from 'react';
import './App.css';
import FormCreator from "./page/FormCreator";
import FormViewer from "./page/FormViewer";
import {FormCreatorContextProvider} from "./context/FormCreatorContext";

function App() {
    return (
        <div className="App">
            <main className="App-header">
                <FormCreatorContextProvider>
                    <FormCreator/>
                </FormCreatorContextProvider>
                {/*<FormViewer/>*/}
            </main>
        </div>
    );
}

export default App;
