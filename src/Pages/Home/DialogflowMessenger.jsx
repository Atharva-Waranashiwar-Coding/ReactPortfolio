import React, { useEffect } from "react";

const DialogflowMessenger = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="Atharva&#x27;s_Portfolio_Assistant"
      agent-id="abd6f461-d3fe-4baf-ae56-2d068e2e8e99"
      language-code="en"
    ></df-messenger>
  );
};

export default DialogflowMessenger;
