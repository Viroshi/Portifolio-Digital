tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "error-container": "#93000a",
                "on-error": "#690005",
                "primary-fixed": "#d6e3ff",
                "secondary-fixed-dim": "#00dbe9",
                "on-error-container": "#ffdad6",
                "inverse-on-surface": "#263049",
                "outline-variant": "#44474d",
                "primary-fixed-dim": "#b9c7e4",
                "background": "#07122a",
                "secondary-fixed": "#7df4ff",
                "on-primary-container": "#74829d",
                "on-tertiary-fixed-variant": "#74009f",
                "on-secondary-container": "#00686f",
                "surface-bright": "#2f3952",
                "surface-container-low": "#101b33",
                "error": "#ffb4ab",
                "tertiary-fixed-dim": "#ebb2ff",
                "surface-container-highest": "#2a344e",
                "tertiary-container": "#2e0042",
                "primary": "#b9c7e4",
                "on-tertiary-container": "#c43dff",
                "tertiary": "#ebb2ff",
                "on-primary": "#233148",
                "on-secondary-fixed": "#002022",
                "surface-container": "#151f37",
                "on-primary-fixed": "#0d1c32",
                "surface-dim": "#07122a",
                "inverse-surface": "#d9e2ff",
                "surface": "#07122a",
                "secondary": "#d3fbff",
                "on-tertiary": "#520072",
                "on-secondary-fixed-variant": "#004f54",
                "on-tertiary-fixed": "#320047",
                "on-background": "#d9e2ff",
                "secondary-container": "#00eefc",
                "outline": "#8f9097",
                "on-secondary": "#00363a",
                "surface-tint": "#b9c7e4",
                "on-surface-variant": "#c5c6cd",
                "surface-container-high": "#1f2942",
                "on-surface": "#d9e2ff",
                "primary-container": "#0a192f",
                "inverse-primary": "#515f78",
                "surface-container-lowest": "#030d25",
                "tertiary-fixed": "#f8d8ff",
                "surface-variant": "#2a344e",
                "on-primary-fixed-variant": "#39475f"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            spacing: {
                "stack-sm": "0.5rem",
                gutter: "1.5rem",
                "section-gap": "4rem",
                "margin-mobile": "1rem",
                "margin-desktop": "5rem",
                "stack-md": "1rem"
            },
            fontFamily: {
                "headline-lg": ["Manrope"],
                "body-md": ["Inter"],
                "headline-lg-mobile": ["Manrope"],
                "headline-md": ["Manrope"],
                "body-lg": ["Inter"],
                "headline-sm": ["Manrope"],
                "label-md": ["JetBrains Mono"]
            },
            fontSize: {
                "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" }],
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "800" }],
                "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
                "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500" }]
            }
        }
    }
};