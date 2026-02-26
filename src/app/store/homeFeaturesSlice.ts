import { createSlice } from "@reduxjs/toolkit";

type HighlightedCellVariant = "order" | "solved";

type HighlightedCell = {
  index: number;
  label: string;
  variant: HighlightedCellVariant;
};

type HomeFeaturesState = {
  cards: {
    cleanCode: {
      title: string;
      description: string;
      mark: string;
    };
    uxFocused: {
      title: string;
      description: string;
      userLabel: string;
      buttonLabel: string;
    };
    reliableSupport: {
      title: string;
      description: string;
      messages: [string, string];
    };
    fastDevelopment: {
      title: string;
      description: string;
      cellCount: number;
      highlightedCells: HighlightedCell[];
    };
    modernStack: {
      title: string;
      description: string;
      badges: string[];
    };
  };
};

const initialState: HomeFeaturesState = {
  cards: {
    cleanCode: {
      title: "Clean Code",
      description: "Structured, readable, and maintainable",
      mark: "</>",
    },
    uxFocused: {
      title: "UX-Focused",
      description: "Seamless experience on all devices",
      userLabel: "User",
      buttonLabel: "Button",
    },
    reliableSupport: {
      title: "Reliable Support",
      description: "Long-term maintenance and stability",
      messages: [
        "Need help with one issue in production?",
        "No problem, we are on it.",
      ],
    },
    fastDevelopment: {
      title: "Fast Development",
      description: "Efficient workflow and quick delivery",
      cellCount: 24,
      highlightedCells: [
        {
          index: 2,
          label: "Order",
          variant: "order",
        },
        {
          index: 15,
          label: "Solved",
          variant: "solved",
        },
      ],
    },
    modernStack: {
      title: "Modern Stack",
      description: "Up-to-date tools for top performance",
      badges: ["Java", "JavaScript", "Node.js", "C#"],
    },
  },
};

const homeFeaturesSlice = createSlice({
  name: "homeFeatures",
  initialState,
  reducers: {},
});

export default homeFeaturesSlice.reducer;
