import { getDaysAfterFirstJanuary } from "./utils";
const declination = (T: number) => 0.4095 * Math.sin(0.016906 * (T - 80.086));

/*
 * B: Breitengrad in Grad
 * h: Bestimmte Horizonthöhe in Meter
 * T: Tagnummer
 */
const timeDifference = (B: number, h: number, T: number) =>
  (12 *
    Math.acos(
      (Math.sin(h) - Math.sin(B) * Math.sin(declination(T))) /
        (Math.cos(B) * Math.cos(declination(T)))
    )) /
  Math.PI;

/*
 * T: Tagnummer
 */
const equationOfTime = (T: number) =>
  -0.171 * Math.sin(0.0337 * T + 0.465) -
  0.1299 * Math.sin(0.01787 * T - 0.168);

export const sunriseLocaltime = (date: Date, B: number) =>
  12 -
  timeDifference(B, -0.0145, getDaysAfterFirstJanuary(date)) -
  equationOfTime(getDaysAfterFirstJanuary(date)) -
  8.44 / 15 +
  1;
