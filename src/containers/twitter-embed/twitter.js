import React, {Suspense} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";

const Twitter = () => {
  if (!twitterDetails.display) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName}
            options={twitterDetails.widgetOptions}
            noHeader
            noFooter
            onLoad={(iframe) => {
              console.log('Timeline Loaded!');
            }}
            onError={(error) => {
              console.error('Timeline failed to load', error);
              document.getElementById("twitter").innerHTML = 
                "<div class='centerContent'><h2>Twitter timeline yüklenemedi. Lütfen daha sonra tekrar deneyin.</h2></div>";
            }}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default Twitter;
