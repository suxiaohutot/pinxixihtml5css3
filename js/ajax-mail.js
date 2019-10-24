$(function() {

	// 拿到表格
	var form = $('#contact-form');

	// 获取div.
	var formMessages = $('.form-messege');

	// 为联系人窗体设置事件侦听器
	$(form).submit(function(e) {
		// 停止浏览器提交表单.
		e.preventDefault();

		// 序列化表单数据.
		var formData = $(form).serialize();

		// 使用Ajax提交表单.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// 确保FormMessages DIV具有“success”类.
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
