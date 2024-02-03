'use client'

import useIntersectionObserver from '@/app/utils/IntersectionObserver';
import { useState, useEffect } from 'react';
import WrittenText from '../written-text/WrittenText'
import styles from './interests.module.scss'

export default function Interests() {
  const [isInView, ref] = useIntersectionObserver(0.5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);
  
  return (
    <div id='interests' className={styles.interests} ref={ref}>
    {
      hasLoaded ?
      <>
      <h1 className='text-5xl font-extrabold'>
        <WrittenText lines={[{ text: 'Interests' }]}></WrittenText>
        </h1>
        
        <div className={styles.interests__info}>
            <p>
              I like cooking, horror movies and writing scripts to automate my life, but my main insterest is music.
            </p>
            <p>
              <div className={styles.interests__info__albums}>
                <iframe className={styles.interests__embed} src="https://bandcamp.com/EmbeddedPlayer/album=2578564785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://mrgloomy.bandcamp.com/album/forever-blizzard">Forever Blizzard by Mr. Gloomy</a></iframe>
                <iframe className={styles.interests__embed} src="https://bandcamp.com/EmbeddedPlayer/album=2297882398/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://mrgloomy.bandcamp.com/album/the-regression-tapes-vol-10-that-time-i-gave-you-i-need-it-back">The Regression Tapes, Vol​​​​.​​​​10: That Time I Gave You, I Need It Back by Mr. Gloomy</a></iframe>
                <iframe className={styles.interests__embed} src="https://bandcamp.com/EmbeddedPlayer/album=3835522251/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://mrgloomy.bandcamp.com/album/the-unenlightened-chap-4-the-getting-off-the-cross">The Unenlightened, Chap. 4: The Getting Off the Cross by Mr. Gloomy</a></iframe>
                <iframe className={styles.interests__embed} src="https://bandcamp.com/EmbeddedPlayer/album=92758596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://mrgloomy.bandcamp.com/album/tsujigiri-and-the-gun">Tsujigiri and The Gun by xTra Planets</a></iframe>
                <iframe className={styles.interests__embed} src="https://bandcamp.com/EmbeddedPlayer/album=2035447062/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://mrgloomy.bandcamp.com/album/operation-pig-head-pt-ii-the-vomit">OPERATION PIG-HEAD - pt.II The Vomit by Mr. Gloomy</a></iframe>
                <iframe className={styles.interests__embed} src="https://bandcamp.com/EmbeddedPlayer/album=3168087326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://dissonantdigging.bandcamp.com/album/the-case-of-the-hydra">The case of the Hydra by Dissonant Digging</a></iframe>



              </div>
            </p>
        </div>
      </>
      :
      ''
    }
    </div>
  )
}