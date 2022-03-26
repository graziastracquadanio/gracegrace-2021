/*
  Original code can be found here
  https://codepen.io/graziastrax/pen/WjzZpx
*/

import { css } from 'styled-components';

export const IcecreamStyle = css`
  .icecream-container {
    --drop-delay: 3s;

    * {
      transition: background-color 0.5s linear, border-radius 0.5s linear;
    }
  }

  .icecream-container {
    width: 100%;
    max-width: 225px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: var(--icecream-background-color);
  }

  .icecream-container .icecream-spot {
    width: 30%;
    height: 3.5%;
    background: var(--icecream-color);
    position: absolute;
    bottom: 3.5%;
    right: -3%;
    border-radius: 50%;
    animation: spotAnimation 5s linear infinite var(--drop-delay);
    animation-play-state: var(--icecream-animation-play-state);
  }

  @keyframes spotAnimation {
    0% {
      transform: scaleX(1);
    }
    18% {
      transform: scaleX(1);
    }
    20% {
      transform: scaleX(1.3);
    }
    32% {
      transform: scaleX(1);
    }
    65% {
      transform: scaleX(1);
    }
    67% {
      transform: scaleX(1.3);
    }
    80% {
      transform: scaleX(1);
    }
  }

  .icecream-container .icecream-drops {
    position: absolute;
    width: 30%;
    height: 35%;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: row-reverse;
    overflow: hidden;
  }

  .icecream-container .icecream-drops-falling_drop {
    width: 100%;
    background-color: var(--icecream-color);
    position: absolute;
    top: -30%;
    border-radius: 50%;
    transform: translateY(-50%);
    animation: fallingDrop 5s ease-in infinite var(--drop-delay);
    animation-play-state: var(--icecream-animation-play-state);
  }

  .icecream-container .icecream-drops-falling_drop:after {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .icecream-container .icecream-drops-falling_drop.second {
    animation-delay: 5.5s;
  }

  .icecream-container .icecream-drops-first {
    width: 25%;
    height: 14%;
    background-color: var(--icecream-color);
    position: relative;
    border-radius: 0 0 100px 100px;
  }

  .icecream-container .icecream-drops-first_space {
    width: 25%;
    height: 10%;
    background-color: var(--icecream-color);
    position: relative;
  }

  .icecream-container .icecream-drops-first_space_end {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--icecream-background-color);
    border-radius: 100px 100px 0 0;
  }

  .icecream-container .icecream-drops-first_space_end:after {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .icecream-container .icecream-drops-second {
    width: 25%;
    height: 17%;
    background-color: var(--icecream-color);
    position: relative;
    border-radius: 0 0 100px 100px;
  }

  .icecream-container .icecream-drops-second_space {
    width: 25%;
    height: 10%;
    background-color: var(--icecream-color);
    position: relative;
  }

  .icecream-container .icecream-drops-second_space_end {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 0 100px 0 0;
    background-color: var(--icecream-background-color);
  }

  @keyframes fallingDrop {
    0% {
      top: -30%;
      transform: scaleY(1);
    }
    19%{
      transform: scaleY(1);
    }
    20% {
      transform: scaleY(0);
      top: 1000%;
    }
    100% {
      transform: scaleY(0);
      top: 1000%;
    }
  }

  .icecream-container .icecream-face {
    width: 70%;
    height: 25%;
    margin-bottom: 5%;
    margin-top: 5%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icecream-container .icecream-face-mouth {
    width: 30%;
    margin-top: 10%;
    position: relative;
    overflow: hidden;
    border-radius: 50% 50% 0 0; /* sad face :( */

    @media (min-width: 360px) {
      border-radius: 10% 10% 0 0; /* happy face :) */
    }
  }

  .icecream-container .icecream-face-mouth:after {
    content: '';
    display: block;
    padding-top: 60%;
  }

  .icecream-container .icecream-face-mouth_inner {
    background: var(--icecream-face-color);
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    border-radius: 50% 50% 0 0; /* sad face :( */

    @media (min-width: 360px) {
      border-radius: 0 0 50% 50%; /* happy face :) */
    }
  }

  .icecream-container .icecream-face-mouth_inner:after {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .icecream-container .icecream-face-mouth_tongue {
    width: 100%;
    height: 100%;
    background-color: var(--icecream-tongue-color);
    position: absolute;
    top: 70%;
    border-radius: 50%;
  }

  .icecream-container .icecream-face-eyes {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .icecream-container .icecream-face-eyes div {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: var(--icecream-face-color);
    animation: eyesAnimation 4s ease-out infinite 1s;
    animation-play-state: var(--icecream-animation-play-state);
  }

  @keyframes eyesAnimation {
    0% {
      transform: scaleY(1);
    }
    5% {
      transform: scaleY(0);
    }
    10% {
      transform: scaleY(1);
    }
  }

  .icecream-container .icecream-body {
    height: 70%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .icecream-container .icecream-body-shadow {
    width: 70%;
    height: 45%;
    z-index: 3;
    display: flex;
    justify-content: space-between;
  }

  .icecream-container .icecream-body-shadow_item {
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;
  }

  .icecream-container .icecream-body-shadow_item > div {
    width: 100%;
    background-color: var(--icecream-darker-color);
    opacity: 0.5;
  }

  .icecream-container .icecream-body-shadow_item_top {
    height: 40%;
    border-radius: 50% 50% 0 0;
  }

  .icecream-container .icecream-body-shadow_item_bottom {
    height: 40%;
    border-radius: 0 0 50% 50%;
  }

  .icecream-container .icecream-body-shadow_item_center {
    flex-grow: 1;
  }

  .icecream-container .icecream-body_top {
    position: absolute;
    top: 0;
    height: 50%;
    width: 100%;
    background-color: var(--icecream-color);
    border-radius: 100% 100% 0 0;
    z-index: 0;
  }

  .icecream-container .icecream-body_bottom {
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
    background-color: var(--icecream-color);
    border-radius: 0 0 0 10%;
    z-index: 0;
  }

  .icecream-container .icecream-bite_first,
  .icecream-container .icecream-bite_second {
    position: absolute;
    background-color: var(--icecream-background-color);
    border-radius: 50%;
    opacity: 0;
    animation: biteAnimation 0.5s forwards 2s;
    animation-play-state: var(--icecream-animation-play-state);
  }

  .icecream-container .icecream-bite_first:after,
  .icecream-container .icecream-bite_second:after {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .icecream-container .icecream-bite_first {
    top: -7%;
    left: 20%;
    width: 30%;
    animation-delay: 0.5s;
  }

  .icecream-container .icecream-bite_second {
    top: 0%;
    left: 7%;
    width: 20%;
  }

  @keyframes biteAnimation {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  .icecream-container .icecream-stick {
    height: 20%;
    width: 20%;
    background-color: var(--icecream-stick-color);
    position: relative;
  }

  .icecream-container .icecream-stick:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 40%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .icecream-container .icecream-stick:after {
    content: '';
    display: block;
    width: 100%;
    padding-top: 100%;
    background-color: var(--icecream-stick-color);
    position: absolute;
    bottom: 0;
    z-index: 2;
    transform: translateY(50%);
    border-radius: 50%;
  }

  .icecream-container .icecream-stick_shadow {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 180%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transform: translate(-50%, 100%);
  }

  .icecream-container .icecream-stick_shadow:after {
    content: '';
    display: block;
    padding-top: 20%;
`;
