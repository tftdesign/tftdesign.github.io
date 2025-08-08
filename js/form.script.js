
$(document).ready(function () {
	$("form#contact-form button.btn").click(function(e){
			if($("form#contact-form")[0].checkValidity()){
					$.ajax({
							type:'POST',
							url  : "../phpMail.php",
							cache:false,
							async:false,
							data :{"free_consultation":$('form#contact-form').serialize()},
							// beforeSend: function(){
							// 	$("form#contact-form button span").text('Submitting...');
							// },
							success:function(result){
									if(result==1){
											$('form#contact-form .alert').show();
											$('form#contact-form .alert').removeClass('alert-danger');
											$('form#contact-form .alert').addClass('alert-success');
											$('form#contact-form .alert strong').text("Thank you for contacting us! Have some cookies we'll get back to you soon.");
											$('form#contact-form .alert span').text("Thank you for contacting us! Have some cookies we'll get back to you soon.");
											$("form#contact-form").trigger("reset"); 
									} else {
											$('form#contact-form .alert').show();
											$('form#contact-form .alert').removeClass('alert-success');
											$('form#contact-form .alert').addClass('alert-danger');
											$('form#contact-form .alert strong').text('Something went wrong, Please try again');

											$('form#contact-form .alert span').html(' Something went wrong, Please try again later,Mail us : <b><a href="mailto:>info@tftus.com?Subject=Contact%20Query" target="_top">>info@tftus.com</a></b>');
									}
									setTimeout(function(){ 
											$('form#contact-form .alert').slideUp("slow"); 
											$("form#contact-form button span").html('Send message <i class="far fa-angle-right"></i>');
											//window.location.replace("/thanks");
									}, 3000);
									e.preventDefault();
									return false;
							}
					});

			}
});

});


$('.captchrefresh').click(function(){
$.ajax({
	type:"POST",
	url: "../captcha/captchrefresh.php",
	beforeSend:function(){
		$('.img-thumbnail.captcha').attr('src','/LoaderIcon.gif');
	},
	success:function(data){
		$('.img-thumbnail.captcha').attr('src',data);
	}
});
return false;
});

