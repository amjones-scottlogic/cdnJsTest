/* eslint dot-notation: ["error", { "allowPattern": "^DLUHC$" }] */
// window['DLUHC'] is required for TypeScript

import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";

declare global {
    interface Window {
        DLUHC: any;
    }
}

//render(<App />, document.getElementById("app")!);

const renderTimeTable = (_options: {}, element: HTMLElement) => {
    render(<App />, element);
};

window.DLUHC = {
    ...window.DLUHC,
    renderTimeTable,
} as Record<string, () => void>;
