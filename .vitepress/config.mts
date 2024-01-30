import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unreal Speech Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Official Documentation",
        items: [
          { text: "Get Started", link: "/guide/get-started" },
          { text: "Overview", link: "/guide/overview" },
          {
            text: "Generate Your First Audio",
            link: "/guide/generate-your-first-audio",
          },
        ],
      },
      {
        text: "🔊 Synthesis",
        items: [
          { text: "Overview", link: "/synthesis/overview" },
          { text: "Voice Settings", link: "/synthesis/voice-settings" },
          { text: "Voice Selection", link: "/synthesis/voice-selection" },
        ],
      },
      {
        text: "🌎 API Reference",
        items: [
          { text: "Speech", link: "/api-reference/speech" },
          { text: "Stream", link: "/api-reference/stream" },
          { text: "Synthesis Tasks", link: "/api-reference/synthesis-tasks" },
        ],
      },
      {
        text: "🤖 SDK",
        items: [
          { text: "python", link: "/sdk/python" },
          { text: "Node.js", link: "/sdk/node-js" },
          { text: "React Native", link: "/sdk/react-native" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/unrealspeech" }],
  },
});
