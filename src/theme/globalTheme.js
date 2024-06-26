import { extendTheme } from "@chakra-ui/react";

export const globalTheme = extendTheme({
  config: {
    initialColorMode: "light",
  },

  colors: {
    p: {
      50: "#d7f3ff",
      100: "#b9ecff",
      200: "#88e2ff",
      300: "#50cfff",
      400: "#28b3ff",
      500: "#0693ff",
      600: "#0a7eeb",
      700: "#0f64be",
      800: "#135695",
      900: "#11345a",
    },
    ap: {
      50: "#0693ff1b",
      100: "#0693ff2b",
      200: "#0693ff",
      300: "#0693ff",
      400: "#0693ff",
      500: "#0693ff",
      600: "#0693ff",
      700: "#0693ff",
      800: "#0693ff",
      900: "#0693ff",
    },
    s: {
      50: "#FEE4D8",
      100: "#FFE6DB",
      200: "#FFC7B8",
      300: "#FFA294",
      400: "#FF7F7A",
      500: "#FF4E57",
      600: "#DB394F",
      700: "#B72748",
      800: "#931840",
      900: "#7A0E3A",
    },
    as: {
      50: "#ff4e571b",
      100: "#ff4e572b",
      200: "#ff4e57",
      300: "#ff4e57",
      400: "#ff4e57",
      500: "#ff4e57",
      600: "#ff4e57",
      700: "#ff4e57",
      800: "#ff4e57",
      900: "#ff4e57",
    },
    bnw: {
      200: "white",
      300: "white",
      500: "#000000",
      600: "#000000",
    },
    wnb: {
      200: "#000000",
      300: "#000000",
      500: "white",
      600: "white",
    },
    b: "#000000",
    bt: "#333333",
    w: "white",
    wt: "#eeeeee",
    error: "#E53E3E",
    dark: "#111",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "black" : "white",
        color: props.colorMode === "dark" ? "wt" : "black",
      },
    }),
  },

  components: {
    Badge: {
      baseStyle: (props) => ({
        p: "4px 16px",
        borderRadius: 8,
        textTransform: "none",
      }),
    },

    Drawer: {
      baseStyle: (props) => ({
        dialog: {
          bg: "transparent",
          color: props.colorMode === "dark" ? "wt" : "wt",
          boxShadow: "none",
        },
      }),
    },

    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === "dark" ? "dark" : "white",
          color: props.colorMode === "dark" ? "wt" : "bt",
          boxShadow: "none",
          borderRadius: "24px",
          mx: "16px",
          backdropFilter: "blur(20px)",
        },
        overlay: {
          bg: "#5b5b5b50",
          backdropFilter: "blur(5px)",
        },
        header: {
          py: "20px",
          px: "24px",
          pr: "70px !important",
        },
        body: {
          px: "24px",
          py: "0px !important",
        },
        footer: {
          p: "24px",
        },
        closeButton: {
          borderRadius: "full",
          right: 4,
          top: 4,
          fontSize: "13px !important",
        },
      }),
    },

    Toast: {
      baseStyle: {
        fontSize: [13, null, 15],
      },
    },

    Menu: {
      baseStyle: (props) => ({
        groupTitle: {
          opacity: 0.5,
          cursor: "default",
        },
        divider: {
          my: 0,
        },
        list: {
          bg: props.colorMode === "dark" ? "dark" : "white",
          border: "1px solid var(--divider3)",
          p: 0,
          overflow: "hidden",
          boxShadow: "none",
          borderRadius: "8px",
        },
        item: {
          bg: "transparent",
          _hover: { bg: "var(--divider)" },
          py: 3,
          px: 4,
        },
      }),
    },

    Button: {
      baseStyle: (props) => ({
        fontWeight: 600,
        borderRadius: 8,
      }),
      variants: {
        solid: {
          px: 6,
        },
        outline: {
          px: 6,
          // border: "2px solid",
        },
      },
    },

    Input: {
      baseStyle: (props) => ({
        field: {
          _autofill: {
            boxShadow:
              props.colorMode === "dark"
                ? "0 0 0px 1000px dark inset"
                : "0 0 0px 1000px #ffffff inset",
            border: "2px solid var(--divider) !important",
          },
        },
      }),
    },

    Checkbox: {
      baseStyle: (props) => ({
        icon: {
          color: "white",
        },
        control: {
          border: props.isInvalid
            ? "1.5px solid #E53E3E"
            : "2px solid var(--divider3) !important",
        },
      }),
    },

    Tooltip: {
      baseStyle: {
        bg: "black",
        color: "w",
        "--popper-arrow-bg": "#0097e8",
        borderRadius: 8,
        px: 4,
        py: 2,
      },
    },

    Table: {
      sizes: {
        md: {
          th: {
            py: "16px",
            px: "12px",
          },
          td: {
            py: "16px",
            px: "12px",
          },
        },
      },
    },
  },
});
