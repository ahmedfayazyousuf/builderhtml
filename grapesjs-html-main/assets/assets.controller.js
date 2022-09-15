export const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: 'image',
      src: 'y.jpg',
    },
    {
      type: 'image',
      src: 'y.jpg',
    },
    {
      type: 'image',
      src: 'z.jpg',
    },
  ];
  res.json(assets);
};
