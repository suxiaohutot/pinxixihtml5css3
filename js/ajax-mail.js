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
			// ������Ϣ�ı�.
			$(formMessages).text(response);
			// �������.
			$('#contact-form input[type="text"],#contact-form input[type="email"],#contact-form textarea').val('');
		})
		.fail(function(data) {
			// ȷ��FormMessages DIV���С�������.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// ������Ϣ�ı�.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
                $(formMessages).text('��ѽ�����������޷�����������Ϣ.');
			}
		});
	});

});
