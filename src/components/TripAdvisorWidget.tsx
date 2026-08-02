"use client";

import Script from "next/script";

/**
 * Official TripAdvisor "self-serve" rating widget for Ceylon Vantage.
 * Pulls your live rating, review count, and a link to write/read reviews
 * directly from TripAdvisor -- no manual updates needed when a new
 * review comes in.
 *
 * This markup is TripAdvisor-generated (from tripadvisor.com/Widgets) and
 * needs to stay structurally as-is -- the script below finds this exact
 * div by id and replaces its contents with the live widget. If you ever
 * regenerate the widget on TripAdvisor's site, swap in the new snippet
 * here rather than editing this markup by hand.
 */
export default function TripAdvisorWidget() {
  return (
    <>
      <div id="TA_selfserveprop64" className="TA_selfserveprop">
        <ul id="KhY1d8z7WQM" className="TA_links pi6M1XWDj8C">
          <li id="StFFddg5" className="K39rGHR4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g665217-d34554874-Reviews-Ceylon_Vantage-Sri_Jayawardenepura_Western_Province.html"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- TripAdvisor's own branding asset, swapped out by their widget script once it loads */}
              <img
                src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>
      <Script
        id="ta-selfserveprop64"
        strategy="lazyOnload"
        data-loadtrk=""
        src="https://www.jscache.com/wejs?wtype=selfserveprop&uniq=64&locationId=34554874&lang=en_US&rating=true&nreviews=5&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2"
      />
    </>
  );
}