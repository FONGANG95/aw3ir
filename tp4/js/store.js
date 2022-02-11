<<<<<<< HEAD
var contactStore = (function () {
    // variable privée
    var contactList = [];
  
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
  
    return {
      add: function (_name, _firsname, _date, _adress, _mail) {
        var contact = {
          name: _name,
          firstname: _firsname,
          date: _date,
          adress: _adress,
          mail: _mail,
        };
        // ajout du contact à la liste
        contactList.push(contact);
  
        return contactList;
      },
  
      getList: function () {
        return contactList;
      },
    };
=======
var contactStore = (function () {
    // variable privée
    var contactList = [];
  
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
  
    return {
      add: function (_name, _firsname, _date, _adress, _mail) {
        var contact = {
          name: _name,
          firstname: _firsname,
          date: _date,
          adress: _adress,
          mail: _mail,
        };
        // ajout du contact à la liste
        contactList.push(contact);
  
        return contactList;
      },
  
      getList: function () {
        return contactList;
      },
    };
>>>>>>> 63dcab36dc5a52617581412d232ac5d252f97a1f
  })();