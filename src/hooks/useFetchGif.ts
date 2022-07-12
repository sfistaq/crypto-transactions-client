import { useState, useEffect, useContext } from "react";
import { customToast, ToastType } from "../components";
import { AppContext, LoadingType, ActionsTypes } from "../context";
import { randomNumberHelper, translateErrorHelper } from "../helpers";
import { config } from "../config";

const dummyGifs = [
  "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284",
  "https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif",
  "https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif",
  "https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif",
  "https://i.pinimg.com/originals/73/d3/a1/73d3a14d212314ab1f7268b71d639c15.gif",
  "https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif",
];

const useFetchGif = (keyword: string) => {
  const [gifUrl, setGifUrl] = useState("");
  const {
    dispatch,
    state: { loading },
  } = useContext(AppContext);
  const {
    GIPHY: { giphyUrl, apiKey, searchLimit },
  } = config;

  const abortController: AbortController = new AbortController();

  const fetchGifs = async () => {
    try {
      if (loading !== LoadingType.FETCH_GIFS) {
        dispatch({
          type: ActionsTypes.SET_LOADING,
          payload: LoadingType.FETCH_GIFS,
        });
      }

      const response = await fetch(
        `${giphyUrl}/search?api_key=${apiKey}&q=${keyword
          .split(" ")
          .join("")}&limit=${searchLimit}`,
        {
          signal: abortController.signal,
        }
      );

      const { data } = await response.json();

      if (data) {
        setGifUrl(data[0].images.downsized_medium.url);
      }
    } catch (err) {
      customToast(
        ToastType.ERROR,
        translateErrorHelper((err as Error).message),
        {
          toastId: "fetch-gif-error",
        }
      );
      setGifUrl(dummyGifs[randomNumberHelper(dummyGifs.length)]);
    }
    dispatch({
      type: ActionsTypes.SET_LOADING,
      payload: null,
    });
  };

  useEffect(() => {
    if (keyword) {
      dispatch({
        type: ActionsTypes.SET_LOADING,
        payload: LoadingType.FETCH_GIFS,
      });
      setTimeout(() => {
        fetchGifs();
      }, 500);
    }
  }, [keyword]);

  return { gifUrl };
};

export default useFetchGif;
