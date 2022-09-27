import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-blacklight">
      <div className=" mx-auto w-auto ">
        <div className="p-4 md:px-20 lg:px-20 lg:py-20">
          <div className="text-center ">
            <div>
              <h2 className="font-DancingScript text-3xl font-bold italic text-white">
                Socials:
              </h2>
              <div className="mt-8 w-auto">
                <ul className="flex flex-col gap-y-4 items-center">
                  <li>
                    <a
                      className="flex items-center gap-x-1 text-sm text-white"
                      href="https://www.instagram.com/upayments" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-instagram"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                      </svg>
                      Instagram
                    </a>
                  </li>
                  <li>
                  <a
                      className="flex items-center gap-x-1 text-sm text-white"
                      href="https://twitter.com/upaymentskw" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-twitter"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                      </svg>
                      Twitter
                    </a>
                  </li>
                  <li>
                  <a
                      className="flex items-center gap-x-1 text-sm text-white"
                      href="https://www.facebook.com/upayments" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-facebook"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                      </svg>
                      Facebook
                    </a>
                  </li>
                  <li>
                  <a
                      className="flex items-center gap-x-1 text-sm text-white"
                      href="https://www.youtube.com/c/UPaymentskw/?sub_confirmation=1" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-youtube"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="5" width="18" height="14" rx="4" />
                        <path d="M10 9l5 3l-5 3z" />
                      </svg>
                      Youtube
                    </a>
                  </li>
                  <li>
                  <a
                      className="flex items-center gap-x-1 text-sm text-white"
                      href="https://www.linkedin.com/company/upayments/about" target="_blank">
                      <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#0077B5" fill-rule="evenodd" d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"/>
                      </svg> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
          <NavLink
          to="/"
          className="font-DancingScript text-3xl font-bold normal-case text-gray-400 hover:text-purple-500"
        >
          UpaymentStore!
        </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;