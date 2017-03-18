/**
 * Created by sghimire on 7/24/2016.
 */

// Login section

function login(){
    var username = $("#username").val();
    var password = $("#password").val();
    alert(username+" "+password);
    SDR.login(username,password,loginCallback());

}

function loginCallback(){
    return function(status, data){
        alert(JSON.stringify(data));
        if(data.connection == "success") {

            window.location="index.html";
        }
        else{
            $("#loginDesc").html("Login Failed");
        }
    }
}

function logout(){
    SDR.logout(logoutCallback());
}

function logoutCallback(){
    return function(status, data){
        if(data.connection == "success") {
            window.location="login.html";
        }
    }
}

// Item Section --------------------------------------------------------------------------------------------------------
function addItem(){
    var itemName = $("#itemName").val();
    var itemUnit = $("#itemUnit").val();
    var itemType = $("input[name='optionsRadios']:checked").val();
    var itemNature = $("input[name='optionsRadio']:checked").val();
    var itemDescription = $("#itemDescription").val();
    // alert (itemName +" "+ itemUnit +" "+ itemType+" "+ itemNature + " "+ itemDescription);
    var id = $("#identity").val();
    if(id != "")
        SDR.updateItem(id, itemName, itemUnit, itemType, itemNature, itemDescription, addItemCallback());
    else
        SDR.InsertProduct(itemName, itemUnit, itemType, itemNature, itemDescription, addItemCallback());
}
function addItemCallback(){
    return function(status,data){
        if(data.connection == "success"){
            $("#identity").val("");
            getItemList();
        }
    }
}

function getItemList() {
    //alert("m in");
    SDR.getItemList(itemListCallback());
}
function itemListCallback() {
    return function(status, data){
        //alert(JSON.stringify(data));
        tableData=[];
        for( index in data.data) {
            var items = data.data[index];
            var edit =  "<button class='btn btn-primary' onclick='editItems(\""+items.id+"\",\""+items.name+"\",\""+items.unit+"\",\""+items.isSupplement+"\",\""+items.isRaw+"\",\""+items.description+"\")'><i class='fa fa-edit'></i>Edit</button><button onclick='deleteItem(\""+items.id+"\")' class='btn btn-danger'><i class='fa fa-pencil'></i>Delete</button>";
            tableData.push([items.name,items.unit,items.isSupplement,items.isRaw,edit]);
        }
        createDataTable("itemList",tableData,0,"asc");
    }
}

function deleteItem(id) {
    $("#myModel").modal("show");
    $('#myModel').on('click',"#delete", function() {
        SDR.deleteItem(id,deleteItemCallback());
    });
}
function deleteItemCallback() {
    return function(status, data) {
            if(data.connection == "success") {
                $("#deleteDialog").html('<script></script>' +
                    '<div class="alert alert-success alert-dismissible" role="alert" id="success-alert">'+
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                    '<strong>Success!</strong> '+
                    '</div>');
            }
            else{
                $("#deleteDialog").html('<div class="alert alert-danger alert-dismissible" role="alert">'+
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                    '<strong>Failed!</strong> Can not perform delete. Value is associated.'+
                    '</div>');
            }
            getItemList();
        }
}
function editItems(id, name, unit, isSupplement, isRaw, description){
    $("#itemName").val(name);
    $("#itemUnit").val(unit);
    if (isSupplement == "true")
        $("#Saleable").prop("checked", true);
    else
        $("#Non-saleable").prop("checked", true);
    if (isRaw == "true")
        $("#Raw").prop("checked", true);
    else
        $("#Solid").prop("checked", true);
    /*$("#itemType").val(isSupplement);
    $("#itemNature").val(isRaw);*/
    $("#itemDescription").val(description);
    $("#identity").val(id);
}
