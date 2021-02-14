import { createChatBotMessage } from "react-chatbot-kit";
import messages from "./messages";

const botName = "Vinibot";


const config = {
    botName: botName,
    lang: "no",
    step: "presentation_init",
    ansCount: 0,
    ansHist: [
      "default"
    ],
    totalQuestions: 6,
    customStyles: {
        botMessageBox: {
          backgroundColor: "#474747",
        },
        chatButton: {
          backgroundColor: "#474747",
        },
      },
      initialMessages: [
        createChatBotMessage(messages.presentation_init()),
        createChatBotMessage(
          messages.askName_init(),
          {
            delay: 500,
          }
        ),
      ]

};

export default config;