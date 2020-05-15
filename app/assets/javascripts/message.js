$(function(){
    function buildHTML(message){
      if ( message.image ) {
        var html = 
          `<div class="chat-main__message">
            <div class="chat-main__message__date-box">
              <div class="chat-main__message__user-name">
                ${message.user_name}
              </div>
              <div class=""chat-main__message__time>
                ${message.created_at}
              </div>
            </div>
              <div class="chat-main__message__comment">
                <p class="lower-message__content">
                ${message.content}
                </p>
              </div>
              <img class="lower-message__image", src=${message.image} >
              </img>
           
          </div>`
        return html;
      }else{
        var html = 
          `<div class="chat-main__message">
            <div class="chat-main__message__date-box">
              <div class="chat-main__message__user-name">
                ${message.user_name}
              </div>
              <div class="chat-main__message__time">
                ${message.created_at}
              </div>
            </div>
              <div class="chat-main__message__comment">
                <p class="lower-message__content">
                ${message.content}
                </p>
              </div>
          </div>`
        return html;
      };
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });

});