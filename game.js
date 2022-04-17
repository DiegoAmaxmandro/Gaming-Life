$(document).ready(function(){
    $("#users").validate({
      rules:{
        name:{
          required: true,
          maxlength: 20,
          minlength: 3
        },
        surname:{
          required: true,
          maxlength: 20,
          minlength: 3
        },
        email: {
         required: true,
         email: true
        },
          select: {
          required: true
        },
         comments: {
         required: true,
         minlength: 10
        },
        age: {
         required: true,
		       min: 15,
		       max: 120,
         number: true
        },
        nationality:{
         required: true,
         minlength: 3,
         maxlength: 20

        }


   },
   submitHandler: function(form){
    alert("Thank you! Once approved, it will be posted on our website. ")
        form.submit()
   }
 
})
})

