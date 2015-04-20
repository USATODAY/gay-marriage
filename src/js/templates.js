define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-header">\n    <a href="' +
((__t = (page_url)) == null ? '' : __t) +
'"><img class=\'iapp-usat-logo-image\' src="' +
((__t = (logo)) == null ? '' : __t) +
'" alt="USA TODAY"></a>\n    <a href="https://twitter.com/hashtag/InTheirWords" target="_blank" class="iapp-project-title">' +
((__t = (title)) == null ? '' : __t) +
'</a>\n</div>\n\n\n';

}
return __p
};

this["templates"]["brightcove.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Start of Brightcove Player -->\n\n<div style="display:none">\nInteractives video player with single clip \n</div>\n\n\n<object id="myExperience' +
((__t = (brightcoveid)) == null ? '' : __t) +
'" class="BrightcoveExperience">\n  <param name="bgcolor" value="#FFFFFF" />\n  <param name="width" value="640" />\n  <param name="height" value="390" />\n  <param name="playerID" value="1797379879001" />\n  <param name="playerKey" value="AQ~~,AAAABvaL8JE~,ufBHq_I6FnzwGj3ZkG57q5Cei-R6yZca" />\n  <param name="isSlim" value="true" />\n  <param name="dynamicStreaming" value="true" />\n  <param name="includeAPI" value="true" />\n    \n  <param name="@videoPlayer" value="' +
((__t = (brightcoveid)) == null ? '' : __t) +
'" />\n  <param name="templateReadyHandler" value="onTemplateReady" />\n  <param name="wmode" value="opaque" />\n</object>\n\n\n<!-- End of Brightcove Player -->';

}
return __p
};

this["templates"]["clip.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="' +
((__t = (stillimage)) == null ? '' : __t) +
'" alt="' +
((__t = (interviewee)) == null ? '' : __t) +
'" class="iapp-index-clip-img">\n<div class="iapp-clip-quote-containter">\n    <h2 class="iapp-clip-quote-text">' +
((__t = (video_quotes)) == null ? '' : __t) +
'</h2>\n</div>';

}
return __p
};

this["templates"]["credits.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-credits-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close"></div>\n<div class="iapp-content-wrap">\n    <h2 class="iapp-section-header iapp-panel-text-main">About</h2>\n    <p class="iapp-section-text">' +
((__t = (credits_intro)) == null ? '' : __t) +
'</p>\n    <h2 class="iapp-section-header iapp-panel-text-main">Credits</h2>\n    <h3 class="iapp-project-credits">\n        ';
 _.each(project_credits, function(creditObj) { 
             if (creditObj.credit_url != null && creditObj.credit_text != "@USATODAY") { ;
__p += '\n            <a href="' +
((__t = (creditObj.credit_url)) == null ? '' : __t) +
'" class="iapp-project-credit-link" target="_blank">' +
((__t = (creditObj.credit_text)) == null ? '' : __t) +
'</a>,\n            ';
  } else if (creditObj.credit_url != null){;
__p += '\n            <a href="' +
((__t = (creditObj.credit_url)) == null ? '' : __t) +
'" class="iapp-project-credit-link" target="_blank">' +
((__t = (creditObj.credit_text)) == null ? '' : __t) +
'</a>\n            ';
  } else {;
__p += '\n            <span class="iapp-project-credit-text">' +
((__t = (creditObj.credit_text)) == null ? '' : __t) +
'</span>\n            ';
  } ;
__p += '\n         ';
  }) ;
__p += '\n    </h3>\n</div>';

}
return __p
};

this["templates"]["greeting.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-content-wrap">\n    <h2 class="iapp-section-header iapp-panel-text-main">' +
((__t = (questionasked)) == null ? '' : __t) +
'</h2>\n</div>\n';

}
return __p
};

this["templates"]["indextab.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="iapp-flip-item">\n    <div class="iapp-people-index iapp-flip-front">\n        <div class="iapp-index-close iapp-clickable">\n            <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close">\n        </div>\n    </div>\n    <div class="iapp-clip-index iapp-flip-back">\n        <div class="iapp-index-back-close button iapp-button-small">\n            <div class="iapp-button-text">BACK</div>\n        </div>\n        <div class="iapp-clip-container"></div>\n    </div>\n</div>';

}
return __p
};

this["templates"]["intro.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-intro-content-wrap iapp-content-wrap">\n    <div class="iapp-content-card">\n        <h2 class="iapp-intro-header iapp-panel-text-main">' +
((__t = (head)) == null ? '' : __t) +
'</h2>\n        <div class="intro-next-button button"><div class="iapp-button-text">Next</div></div>\n    </div>  \n</div>';

}
return __p
};

this["templates"]["name.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel iapp-name-input-panel active">\n    <div class="iapp-button-small iapp-name-back-button button">\n        <div class="iapp-button-text">\n            Back\n        </div>\n    </div>\n    <div class="iapp-content-wrap">\n        <h2 class="iapp-name-greeting iapp-panel-text-main">' +
((__t = (greeting)) == null ? '' : __t) +
'</h3>\n        <h2 class="iapp-name-info iapp-panel-text-main">' +
((__t = (name_text)) == null ? '' : __t) +
'</h2>\n        <input type="text" class="iapp-name-input" placeholder="TYPE YOUR NAME HERE">\n        <div class="iapp-name-skip-button iapp-clickable">Skip</div>\n        <div class="name-next-button button iapp-clickable"><div class="iapp-button-text">Next</div></div>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["person.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-person-image-wrap iapp-clickable">\n    <img src="' +
((__t = (person_still)) == null ? '' : __t) +
'" alt="' +
((__t = (person_name)) == null ? '' : __t) +
'" class="iapp-person-item-img">\n    <div class="iapp-person-more-video-button">\n        More videos\n    </div>\n</div>\n<div class="iapp-person-text">\n    <h3 class="iapp-person-name">' +
((__t = (person_name)) == null ? '' : __t) +
'</h3>\n    <p class="iapp-person-bio">' +
((__t = (person_bio)) == null ? '' : __t) +
'</p>\n</div>\n\n';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close"></div>\n\n<div class="iapp-content-wrap">\n    ';
 if (userName != "") { ;
__p += '\n    <h2 class="iapp-share-intro iapp-panel-text-main">Your turn, ' +
((__t = (userName)) == null ? '' : __t) +
'. Continue this conversation by sharing this video.</h2>\n    ';
} else { ;
__p += '\n    <h2 class="iapp-share-intro iapp-panel-text-main">Your turn. Continue this conversation by sharing this video.</h2>\n    ';
};
__p += '\n    \n    <p class="iapp-share-preview">' +
((__t = (sharelanguage)) == null ? '' : __t) +
' #' +
((__t = (hashtags)) == null ? '' : __t) +
'</p>\n    \n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&hashtags=' +
((__t = (hashtags)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/twitter.svg" alt="Twitter share"></a>\n        <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/facebook.svg" alt="Facebook share"></a>\n        <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/email.svg" alt="Email share"></a>\n    </div>\n</div>';

}
return __p
};

this["templates"]["tag.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = (tagPretty)) == null ? '' : __t) +
'\n';

}
return __p
};

this["templates"]["tags.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel iapp-tag-sub1 active">\n    <div class="iapp-button-small iapp-topics-back-button button">\n        <div class="iapp-button-text">\n            Back\n        </div>\n    </div>\n    <div class="iapp-content-wrap">\n        <h2 class="iapp-section-header iapp-panel-text-main">' +
((__t = (tag_text)) == null ? '' : __t) +
' ' +
((__t = (greeting)) == null ? '' : __t) +
'</h2>\n        <div class="iapp-tag-container">\n            \n        </div>\n    \n        <div class="tags-next-button button hide iapp-clickable">\n            <div class="iapp-button-text">Next</div>\n        </div>\n    \n    </div>\n</div>\n\n<div class="iapp-panel iapp-tag-intro upcoming">\n\n    \n</div>\n';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

this["templates"]["video.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-video-back-button button iapp-button-small"><div class="iapp-button-text">Back to topics</div></div>\n\n<div class="iapp-video-info">\n     ';
 if (userName != "") { ;
__p += '\n    <h4 class=\'iapp-video-greeting\'>' +
((__t = (userName)) == null ? '' : __t) +
', ' +
((__t = (intro)) == null ? '' : __t) +
'</h4>\n    ';
} else { ;
__p += '\n    <h4 class=\'iapp-video-greeting\'>' +
((__t = (intro)) == null ? '' : __t) +
'</h4>\n    ';
};
__p += '\n    \n    <div class="iapp-video-info-buttons">\n        <div class="iapp-video-more-button button iapp-button-large"><div class="iapp-button-text">More Videos</div></div>\n        <div class="iapp-video-discuss-button button iapp-button-small"><div class="iapp-button-text">Share</div></div>\n        <div class="iapp-video-credits-button button iapp-button-small"><div class="iapp-button-text">Credits</div></div>\n        <div class="iapp-video-play-button button iapp-button-small"><div class="iapp-button-text">Pause</div></div>\n        <div class="iapp-video-replay-button button iapp-button-small"><div class="iapp-button-text">Replay</div></div>\n        \n        \n    </div>\n</div>\n';

}
return __p
};

  return this["templates"];

});