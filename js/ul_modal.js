/**
* Provide the HTML to create the modal dialog.
*/
Drupal.theme.prototype.CToolsULModal = function () {
  var html = '';

  html += '<div id="ctools-modal">';
  html += '    <div id="feedback-block" class="feedback-block ">';
  html += '              <span id="modal-title" class="modal-title"></span>';
  html += '              <span class="popups-close"><a class="close" href="#"></a></span>';
  html += '              <div class="clear-block"></div>';

  html += '           <div class="popups-container">';
  html += '             <div class="modal-scroll"><div id="modal-content" class="modal-content popups-body"></div></div>';   
  html += '          </div>';
  html += '         <div class="clearboth"></div>';

  html += ' </div>';
  html += '</div>';

  return html;

}
