import dva from "dva";
import React from "react";
import router from "./router.js";
import counterModel from "./models/counterModel.js";

const app=dva();

app.model(counterModel);

app.router(router);

app.start("#app");
