export const getGifs = async (category) => {
  const token = import.meta.env.VITE_GIPHY_TOKEN;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ token }&q=${ category }&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
};
