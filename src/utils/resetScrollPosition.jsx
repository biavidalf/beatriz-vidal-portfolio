export const resetScrollPosition = (element) => {
  console.log(element);
  element.current.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
