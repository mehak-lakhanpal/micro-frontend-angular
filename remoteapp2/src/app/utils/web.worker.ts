
/// <reference lib="webworker" />
addEventListener('message', ({ data }) => {
  const afterGst = (data.premiumBaseAmount + ((data.premiumBaseAmount * data.gst)/100)) ;
  const response = (afterGst - ((afterGst * data.discount)/100))
  console.log(response);
  postMessage(response);
});
