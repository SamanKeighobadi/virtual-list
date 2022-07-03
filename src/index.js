import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Loading from "./utils/Loading";
// data fecthing
import { SWRConfig } from "swr";
import axios from "axios";

const root = createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading />}>
    <SWRConfig
      value={{
        refreshInterval: 5000,
        suspense: true,
        fetcher: (...args) => axios.get(args).then((res) => res.data),
      }}
    >
      <App />
    </SWRConfig>
  </Suspense>
);
