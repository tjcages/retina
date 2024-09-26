export const pageTransition = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1
      },
      {
        opacity: 0
      }
    ],
    {
      duration: 200,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)"
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
        transform: "scale(0.95)"
      },
      {
        opacity: 1,
        transform: "scale(1)"
      }
    ],
    {
      duration: 400,
      easing: "ease-out",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)"
    }
  );
};
