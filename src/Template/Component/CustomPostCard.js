import React from 'react';
import paul from '../../Assets/paul.jpg';

export default function CustomPostCard() {
  return (
      <div className={'cardPost'}>
          <div className={'cardPostHeader'}>
              <img src={paul} alt={'profile picture'}/>
              <h2>
                  lorem ipsum
              </h2>
              <p className={'creationDate'}>
                  21/06/2020
              </p>
          </div>
          <div className={'cardContent'}>
              <img src={paul} alt={'profile picture'}/>
              <p>
                  lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                  ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                  ipsumlorem ipsumlorem ipsum
              </p>
          </div>
      </div>
  );
}
