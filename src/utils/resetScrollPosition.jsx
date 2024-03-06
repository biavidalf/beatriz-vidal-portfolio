export const resetScrollPosition = (element) => {
  element.current.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
