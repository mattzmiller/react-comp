import React from "react";
import { storiesOf } from "@storybook/react";

import { ChatArea } from "../components/ChatArea";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <ChatArea />;
});
