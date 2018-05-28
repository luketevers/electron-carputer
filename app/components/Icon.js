// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OBDSVG from '../assets/obd2-01.svg';
import PlaySVG from '../assets/google-music.svg';
import SoundSVG from '../assets/soundcloud.svg';
import MapsSVG from '../assets/map.svg';
import styles from './Icon.css';

type Props = {};

export default class Icon extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.icons}>
          <Link to="/play" className={styles.tile}>
            <PlaySVG className={styles.icon} />
          </Link>
          <Link to="/sound" className={styles.tile}>
            <SoundSVG className={styles.icon} />
          </Link>
          <Link to="/OBD" className={styles.tile}>
            <OBDSVG className={styles.icon} />
          </Link>
          <Link to="/map" className={styles.tile}>
            <MapsSVG className={styles.icon} />
          </Link>
        </div>
      </div>
    );
  }
}
