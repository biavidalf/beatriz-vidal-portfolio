function getImageURL(name) {
  console.log(new URL(`../assets/${name}`, import.meta.url));
  return new URL(`../assets/${name}`, import.meta.url).href;
}

export { getImageURL };
