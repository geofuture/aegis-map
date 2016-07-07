$(document).ready(function(){
	
	$('#form-signin').validate({
		rules: {
			name:{
				required: true
			},
			email: {
				required: true,
				email: true
			},
			password: {
				minlength: 6,
				required: true
			},
			confirmation: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			}
		},
		highlight: function (element) {
	                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
	            },
	            success: function (element) {
	                $(element).closest('.form-group').removeClass('has-error has-feedback').addClass('has-success has-feedback');
	                $(element).remove();
	                var identify =  element.attr("for");
	                console.log(identify);
	                $("span[for='"+identify+"']").addClass("fa fa-check form-control- feedback");
	            }
	});

	$('#form-add').validate({
		rules: {
			txtname:{
				required: true
			},
			textdetail: {
				required: true,
				email: true
			},
		},
		highlight: function (element) {
	                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
	            },
	            success: function (element) {
	                $(element).closest('.form-group').removeClass('has-error has-feedback').addClass('has-success has-feedback');
	                $(element).remove();
	                var identify =  element.attr("for");
	                console.log(identify);
	                $("span[for='"+identify+"']").addClass("fa fa-check form-control- feedback");
	            }
	});





});