// business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}
function Address (type, street, city, state) {
  this.type = type;
  this.street = street;
  this.city = city;
  this.state = state;
};

//user Interface Logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                  '<label>Type</label>' +
                                  '<select class="form-control" id="address-type">' +
                                    '<option value="Residential">Residential</option>' +
                                    '<option value="Business">Business</option>' +
                                    '<option value="Vacation">Vacation</option>' +
                                    '<option value="P.O. Box">P.O. Box</option>' +
                                    '<option value="Super Secret Lab">Super Secret Lab</option>' +
                                  '</select>' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
  $('#new-contact').submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedType = $(this).find('#address-type').val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });


    $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + '</span></li>');

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.type + ", " + address.street + ", " + address.city + " " + address.state + "</li>");
      });
    });

    $('input#new-first-name').val('');
    $('input#new-last-name').val('');
    $("input.new-street").val('');
    $("input.new-city").val('');
    $("input.new-state").val('');
    $("#new-addresses").empty();
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                  '<label>Type</label>' +
                                  '<select class="form-control" id="address-type">' +
                                    '<option value="Residential">Residential</option>' +
                                    '<option value="Business">Business</option>' +
                                    '<option value="Vacation">Vacation</option>' +
                                    '<option value="P.O. Box">P.O. Box</option>' +
                                    '<option value="Super Secret Lab">Super Secret Lab</option>' +
                                  '</select>' +
                                  '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
});
