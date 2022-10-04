export const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: 'image',
      src: 'C:/Users/DELL 5590/Desktop/Al Nakheel Logo.bmp',
      height: 350,
      width: 250,
      name: 'displayName'
    },
    {
      // As the 'image' is the base type of assets, omitting it will
      // be set as `image` by default
      src: 'https://static.wikia.nocookie.net/looneytunes/images/2/20/Daffy_Duck_%28SVG%29.svg/revision/latest?cb=20220111144139',
      height: 350,
      width: 250,
      name: 'displayName'
    },
  ];
  res.json(assets);
};
