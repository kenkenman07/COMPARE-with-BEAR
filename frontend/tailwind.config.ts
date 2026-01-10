
export default {
  theme: {
    extend: {
      keyframes: {
        run: {
          "0%, 100%": {
            transform: "translateY(0) rotate(-1deg)" 
          },
          "25%": { 
            transform: "translateY(-3px) rotate(1deg)" 
          },
          "50%": { 
            transform: "translateY(0) rotate(-1deg)" 
          },
          "75%": { 
            transform: "translateY(-2px) rotate(1deg)" 
          },
        },
      },
      animation: {
        run: "run 0.5s ease-in-out infinite",
      },
    },
  },
}; 