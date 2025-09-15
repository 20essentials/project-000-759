import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";

const appStyles = {
  height: "100vh",
  width: "100%",
  display: "flex",
  backgroundImage: `
    repeating-conic-gradient(from 0deg at 0% 0%, #f0f 0deg, #000 18deg),
    repeating-conic-gradient(from 0deg at 100% 0%, #000 0deg, #f0f 18deg),
    repeating-conic-gradient(from 0deg at 100% 100%, #000 0deg, #f0f 18deg),
    repeating-conic-gradient(from 0deg at 0% 100%, #000 0deg, #f0f 18deg)
  `,
  backgroundSize: "96px 96px",
  backgroundBlendMode: "screen",
  fontFamily: "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  scrollBehavior: "smooth"
};

const App = () => <div style={appStyles}></div>;

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

export default App;
