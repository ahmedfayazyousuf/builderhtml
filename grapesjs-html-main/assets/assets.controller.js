export const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: 'image',
      src: 'https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fimage-removebg-preview%20(1).pngb1a05011-7bcb-453a-8681-4838ee6affa3?alt=media&token=8e57e074-a8e6-479f-8ffb-164c2f503732',
      height: 350,
      width: 250,
      name: 'sexy'
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
