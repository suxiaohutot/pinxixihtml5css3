$(function() {

	// �õ����
	var form = $('#contact-form');

	// ��ȡdiv.
	var formMessages = $('.form-messege');

	// Ϊ��ϵ�˴��������¼�������
	$(form).submit(function(e) {
		// ֹͣ������ύ��.
		e.preventDefault();

		// ���л�������.
		var formData = $(form).serialize();

		// ʹ��Ajax�ύ��.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// ȷ��FormMessages DIV���С�success����.
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
