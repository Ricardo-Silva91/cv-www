"use client";

import useIntersectionObserver from "@/app/utils/IntersectionObserver";
import { useState, useEffect, useMemo, useCallback, useContext } from "react";
import WrittenText from "../written-text/WrittenText";
import styles from "./interests.module.scss";
import { SmoothScrollContext } from "@/app/utils/SmoothScroll.context";

const albums = [
  {
    img: "img/albums (7).png",
    href: "https://mrgloomy.bandcamp.com/album/forever-blizzard",
    name: "Forever Blizzard by Mr. Gloom",
  },
  {
    img: "img/albums (6).png",
    href: "https://mrgloomy.bandcamp.com/album/the-regression-tapes-vol-10-that-time-i-gave-you-i-need-it-back",
    name: "The Regression Tapes, Vol.10: That Time I Gave You, I Need It Back by Mr. Gloom",
  },
  {
    img: "img/albums (2).png",
    href: "https://mrgloomy.bandcamp.com/album/the-unenlightened-chap-4-the-getting-off-the-cross",
    name: "The Unenlightened, Chap. 4: The Getting Off the Cross by Mr. Gloom",
  },
  {
    img: "img/albums (12).png",
    href: "https://mrgloomy.bandcamp.com/album/tsujigiri-and-the-gun",
    name: "Tsujigiri and The Gun by xTra Planet",
  },
  {
    img: "img/albums (9).png",
    href: "https://mrgloomy.bandcamp.com/album/operation-pig-head-pt-ii-the-vomit",
    name: "OPERATION PIG-HEAD - pt.II The Vomit by Mr. Gloom",
  },
  {
    img: "img/albums (3).png",
    href: "https://dissonantdigging.bandcamp.com/album/the-case-of-the-hydra",
    name: "The case of the Hydra by Dissonant Digging",
  },
  {
    img: "img/albums (1).png",
    href: "https://aknockonyourdooratnight.bandcamp.com/album/how-did-you-get-here",
    name: "How Did You Get Here? by A Knock on your Door at Night",
  },
  {
    img: "img/albums (4).png",
    href: "https://chocobolofi.bandcamp.com/album/flare",
    name: "Flare by Chocobo",
  },
  {
    img: "img/albums (5).png",
    href: "https://aknockonyourdooratnight.bandcamp.com/album/visitor",
    name: "VISITOR by A Knock on your Door at Night",
  },
  {
    img: "img/albums (8).png",
    href: "https://sugarmineinthesky.bandcamp.com/album/the-green-people",
    name: "The Green People by Sugar Mine in the Sky",
  },
  {
    img: "img/albums (10).png",
    href: "https://chocobolofi.bandcamp.com/album/waterkick",
    name: "Waterkick by Chocobo",
  },
  {
    img: "img/albums (11).png",
    href: "https://sugarmineinthesky.bandcamp.com/album/bakers-special-beat-tape",
    name: "Baker's Special: Beat-tape by Sugar Mine in the Sky",
  },
  {
    img: "img/albums (13).png",
    href: "https://newdevola.bandcamp.com/album/to-be-empty",
    name: "To be empty by New Devola",
  },
  {
    img: "img/albums (14).png",
    href: "https://newdevola.bandcamp.com/album/for-fun",
    name: "For Fun by New Devola",
  },
];
const numberOfAlbumsToShow = 4;

export default function Interests() {
  const { scroll } = useContext<any>(SmoothScrollContext);
  const [isInView, ref] = useIntersectionObserver(0.5);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [albumsToShowStartIndex, setAlbumsToShowStartIndex] = useState(0);
  const [showAlbumList, setShowAlbumList] = useState(true);
  const [loadedImgs, setLoadedImgs] = useState(0);

  const albumsToShow = useMemo(
    () =>
      albums.slice(
        albumsToShowStartIndex,
        albumsToShowStartIndex + numberOfAlbumsToShow
      ),
    [albumsToShowStartIndex]
  );
  const changeAlbums = useCallback(() => {
    setShowAlbumList(false);

    setTimeout(() => {
      setAlbumsToShowStartIndex(
        albumsToShowStartIndex + numberOfAlbumsToShow > albums.length
          ? 0
          : albumsToShowStartIndex + numberOfAlbumsToShow
      );

      setTimeout(() => {
        setShowAlbumList(true);
      }, 500);
    }, 700);
  }, [albumsToShowStartIndex]);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  return (
    <div
      id="interests"
      className={`${styles.interests} reveal-box ${
        hasLoaded ? "reveal-box--visible" : ""
      } `}
      ref={ref}
    >
      <h1 className="text-5xl font-extrabold">
        {hasLoaded ? (
          <WrittenText lines={[{ text: "Interests" }]}></WrittenText>
        ) : (
          <></>
        )}
      </h1>
      <div className={styles.interests__info}>
        <p className="mt-4 text-xl">
          I like cooking, horror movies and writing scripts to automate my life,
          but my main insterest is music.
        </p>
        <div className="flex flex-col items-center">
          <div
            className={`${styles.interests__info__albums} reveal-box ${
              showAlbumList ? "reveal-box--visible" : ""
            } `}
          >
            {albumsToShow.map((album) => (
              <a
                className={styles.interests__info__albums__album}
                key={album.href}
                href={album.href}
                target="_blank"
              >
                <img src={album.img} alt={album.name} />
              </a>
            ))}
          </div>
          {numberOfAlbumsToShow < albums.length ? (
            <button
              onClick={changeAlbums}
              className={`${styles.interests__info__button} mt-8 cursor-none `}
            >
              Show different albums
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
