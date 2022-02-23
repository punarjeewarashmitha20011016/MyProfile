function Signup(id, name, nic, contactNo, userName, password, address) {
    var __id = id;
    var __name = name;
    var __nic = nic;
    var __contactNo = contactNo;
    var __userName = userName;
    var __password = password;
    var __address = address;

    this.setId = function(id) {
        __id = id;
    }
    this.setName = function(name) {
        __name = name;
    }
    this.setNic = function(nic) {
        __nic = nic;
    }
    this.setContactNo = function(contactNo) {
        __contactNo = contactNo;
    }
    this.setUserName = function(userName) {
        __userName = userName;
    }
    this.setPassword = function(password) {
        __password = password;
    }
    this.setAddress = function(address) {
        __address = address;
    }
    this.getId = function() {
        return __id;
    }
    this.getName = function() {
        return __name;
    }
    this.getNic = function() {
        return __nic;
    }
    this.getContactNo = function() {
        return __contactNo;
    }
    this.getUserName = function() {
        return __userName;
    }
    this.getPassword = function() {
        return __password;
    }
    this.getAddress = function() {
        return __address;
    }
}