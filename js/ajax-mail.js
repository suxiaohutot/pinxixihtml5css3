$(function() {

	var form = $('#contact-form');
	var formMessages = $('.form-messege');
	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			// 设置消息文本.
			$(formMessages).text(response);
			// 清除窗体.
			$('#contact-form input[type="text"],#contact-form input[type="email"],#contact-form textarea').val('');
		})
		.fail(function(data) {
			// 确保FormMessages DIV具有“错误”类.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// 设置信息文本.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
                $(formMessages).text('哎呀！发生错误，无法发送您的消息.');
			}
		});
	});

});
