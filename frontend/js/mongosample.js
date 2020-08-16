function showdata()
{
   $.ajax({
       url: "/api/user",
       method: "GET",
       success: function(result) {
           var r="<table>";
           r+="<tr>"
           r+="<td>"+"Username"+"</td>";
           r+="<td>"+"First Name"+"</td>";
           r+="<td>"+"Last Name"+"</td>";
           r+="<td>"+"Age"+"</td>";
           r+="</tr>";
           for(var row in result)
           {   r+="<tr>";
               r+="<td>"+result[row].usrname+"</td>";
               r+="<td>"+result[row].fname+"</td>";
               r+="<td>"+result[row].lname+"</td>";
               r+="<td>"+result[row].age+"</td>";
               r+="</tr>";
           }
           r+="</table>";
           $("#table").html(r);
       },
       error: function(err) {
         console.log(err);
       }
     });
    
    $("button").click(function(){
       $("#messages").css("display","inline");
})}
showdata();