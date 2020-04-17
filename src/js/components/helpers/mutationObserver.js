(function () {
  // Select the node that will be observed for mutations
  let targetNode = document.querySelector('header');

// Options for the observer (which mutations to observe)
  let config = {
    attributes: true,
    childList: true,
    subtree: true };

  // Callback function to execute when mutations are observed
function mutationCallback (mutationsList, observer) {

  for(let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');

      observer.disconnect();
    }
    else if (mutation.type === 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
}

// Create an observer instance linked to the callback function
  let observer = new MutationObserver(mutationCallback);

// Start observing the target node for configured mutations
  observer.observe(targetNode, config);



// Later, you can stop observing
  //observer.disconnect();
})();
