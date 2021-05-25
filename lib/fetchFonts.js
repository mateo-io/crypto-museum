import React from "react"

export default function fetchFonts() {
  // we adopt "useEffect" so that the function will run once the component is rendered to avoid next.js errors
  React.useEffect(() => {
    // We use dynamic import to prevent "window is not defined" error
    import("webfontloader").then((WebFontLoader) => {
      WebFontLoader.load({
        google: {
          families: ["Montserrat", "Meera Inimai", "Odibee Sans"],
        },
        timeout: 3000,
      })
    })
  }, [])
}
