// @ts-nocheck
export const getBrowser = () => {
  // Opera 8.0+
  var isOpera =
    (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== "undefined";

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && window["safari"].pushNotification)
    );

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  var isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Edge (based on chromium) detection
  var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") != -1;

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;

  switch (true) {
    case isOpera:
      return "opera";
    case isFirefox:
      return "firefox";
    case isSafari:
      return "safari";
    case isIE:
      return "ie";
    case isEdge:
      return "edge";
    case isChrome:
      return "chrome";
    case isEdgeChromium:
      return "edgeChromium";
    case isBlink:
      return "blink";
    default:
      return "unknown";
  }
};

export const getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
};

export const getClass = () => {
  const tryOne = getMobileOperatingSystem();
  if (tryOne === "unknown") {
    const tryTwo = getBrowser();
    if (tryTwo === "safari") {
      return "safari";
    } else {
      return "chromium";
    }
  } else {
    return tryOne;
  }
};
