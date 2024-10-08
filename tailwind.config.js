/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "580px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
        "2xl": "1536px"
      }
    },
    extend: {
      fontFamily: {
        basel: ["var(--font-basel)"],
        jomhuria: ["var(--font-jomhuria)"],
        riegraf: ["var(--font-riegraf)"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        dark: "hsl(var(--dark))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        "pink-primary": {
          DEFAULT: "hsl(var(--pink-primary))",
          foreground: "hsl(var(--pink-primary-foreground))"
        },
        "pink-secondary": {
          DEFAULT: "hsl(var(--pink-secondary))",
          foreground: "hsl(var(--pink-secondary-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      animation: {
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--marquee-duration) linear infinite var(--marquee-direction)"
      },
      keyframes: {
        "pulse-slow": {
          "0%": { opacity: 1 },
          "50%": { opacity: 1 },
          "80%": { opacity: 0.7 },
          "100%": { opacity: 1 }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-gradient-mask-image")]
};
