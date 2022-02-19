function Customer(id,name,contactNo,nic,address){
    var __cusId = id;
    var __cusName = name;
    var __cusContactNo = contactNo;
    var __cusNic = nic;
    var __cusAddress = address;

    this.setCustomerId = function(id){
        __cusId = id;
    }

    this.setCustomerName = function(name){
        __cusName = name;
    }

    this.setCustomerContactNo = function(contactNo){
        __cusContactNo = contactNo;
    }

    this.setCustomerNic = function(nic){
        __cusNic = nic;
    }

    this.setCustomerAddress = function(address){
        __cusAddress = address;
    }

    this.getCustomerId = function(){
        return __cusId;
    }

    this.getCustomerName = function(){
        return __cusName;
    }

    this.getCustomerContactNo = function(){
        return __cusContactNo;
    }

    this.getCustomerNic = function(){
        return __cusNic;
    }

    this.getCustomerAddress = function(){
        return __cusAddress;
    }
};