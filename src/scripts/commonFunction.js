const importAllImg = (r) => {
  let images = {};
  r.keys().map((item, _) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

export { importAllImg };
