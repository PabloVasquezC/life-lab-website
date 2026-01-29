"use client"
import { useEffect } from "react"
import "@n8n/chat/style.css";


export function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://n8n.fluxia.cl/webhook/6018586e-94b8-4c37-82fb-1b4d9d218261/chat",
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        loadPreviousSession: true,
        showWelcomeScreen: false,
        initialMessages: [
          "👋 Hola! Soy el asistente virtual de Life Lab y estoy aquí para ayudarte."
        ],
        i18n: {
          en: {
            title: "Life Lab",
            subtitle: "Asistente Virtual",
            inputPlaceholder: "Escribe aqui..",
          },
        },
      });
    });
  }, []);

  return null;
}
