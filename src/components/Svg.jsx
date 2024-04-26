import computer from '../assets/3d-casual-life-analytics-on-computer-screen.png'
import olshop from '../assets/joy-delivery-from-online-store-1.png'
import discuss from '../assets/3d-casual-life-colleagues-discussing-team-project-1.png'
import anime from 'animejs';
import { useEffect } from 'react';

function Svg() {

  useEffect(() => {
    anime({
      targets: '.animation .computer',
      translateX: [10,30], // from 100 to 250
      delay: 100,
      direction: 'alternate',
      loop: true
    });
    anime({
      targets: '.animation .olshop',
      translateY: [0, 50], // from 100 to 250
      delay: 100,
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className='w-screen h-fit'>
      <div className='grid grid-cols-3 my-auto'>
        <div className='justify-end flex animation'>
          <img className='w-fit h-8 xl:h-28 computer' src={computer} alt="" />
        </div>
        <div className='mx-auto'>
          <img className='' src={discuss} alt="" />
        </div>
        <div className='animation'>
          <img className='w-fit h-8 xl:h-28 olshop' src={olshop} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Svg
