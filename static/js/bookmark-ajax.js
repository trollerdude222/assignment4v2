$(document).ready(function() {
  $('#suggestion').keyup(function(){
    var query;
    query = $(this).val();
    $.ajax({     
      method:'get',
      url:'/bookmark/suggest_category/', 
      data: {suggestion: query}, 
      success:function(data){
            $('#cats').html(data);
          }
    });  
  });
});

