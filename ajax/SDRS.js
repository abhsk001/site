/**
 * Created by sghimire on 7/24/2016.
 */
if (typeof SDR !== 'object') {
    var SDR = {};
}

(function () {

    'use strict';

    var requestHeaders = {"Accept": "application/json", "Content-Type": "application/json"};

    function request(url, request_type, datatype, callback, postdata) {

        // For debug only
        var SERVER = "http://localhost:8080";
        /*"http://52.27.46.230:8080";*/
        url = SERVER + url;
        console.log(url);
        if (typeof(postdata) == "object") {
            postdata = JSON.stringify(postdata);

        }

        $.ajax({
            beforeSend: function (xhr) {
                for (var key in requestHeaders) {
                    xhr.setRequestHeader(key, requestHeaders[key]);
                    ajaxindicatorstart("...Please wait.. Data is loading...");
                }
            },
            url: url,
            xhrFields: {
                withCredentials: true
            },
            data: postdata,
            dataType: datatype,
            type: request_type,
            success: function (data) {
                ajaxindicatorstop();
                callback("success", data);
            },
            error: function (xhr, status, error) {
                ajaxindicatorstop();
                try {
                    var errorMessageObj = JSON.parse(xhr.responseText);
                } catch (err) {
                    errorMessageObj = {type: "ERROR", message: xhr.responseText};
                }
                callback(error, errorMessageObj);
            }
        });
    }

// ----------------------------------------------- User Management Section ---------------------------------------------

    SDR.login = function (username, password, callback) {
        var url = "/OneChainSystem/user/login";

        var login = {
            username: username,
            password: password
        };

        request(url, "POST", "json", callback, login);
        alert(url);
    };

    SDR.logout = function (callback) {
        var url = "/OneChainSystem/user/logout";
        request(url, "POST", "json", callback);
    };

// -----------------------Item Management Section-----------------


    SDR.getItemList = function (callback) {
        var url = "/OneChainSystem/items/itemList?";
        request(url, "GET", "json", callback);
    };

    SDR.updateItem = function (id, itemName, itemUnit, itemType, itemNature, itemDescription, callback) {
        var url = "/OneChainSystem/items/updateItem?" +
            "name=" + itemName +
            "&unit=" + itemUnit +
            "&isSupplement=" + itemType +
            "&isRaw=" + itemNature +
            "&description=" + itemDescription +
            "&id=" + id;
        request(url, "GET", "json", callback);
    };

    SDR.deleteItem = function (id, callback) {
        var url = "/OneChainSystem/items/deleteItem?" +
            "id=" + id;
        request(url, "GET", "json", callback);
    };

    SDR.addStaff = function(staffName,staffAddress,staffPhone,callback) {
        var url = "/SchoolWebBack/staff/addStaff?"+
            "staffName="+staffName+"&"+
            "staffAddress="+staffAddress+"&"+
            "staffPhone="+staffPhone;
        request(url, "GET", "json", callback);
    };

    SDR.updateStaff = function(id,staffName,staffAddress,staffPhone,callback) {
        var url = "/SchoolWebBack/staff/editStaff?"+
            "id="+id+"&"+
            "staffName="+staffName+"&"+
            "staffAddress="+staffAddress+"&"+
            "staffPhone="+staffPhone;
        request(url, "GET", "json", callback);
    };

    SDR.getAllStaff = function(callback){
        var url = "/SchoolWebBack/staff/getStaff";
        request(url, "GET", "json", callback);
    };
    SDR.deleteStaff = function(id,callback){
        var url = "/SchoolWebBack/staff/deleteStaff?id="+id;
        request(url, "GET", "json", callback);
    };

    }());