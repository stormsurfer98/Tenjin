function createPersonCard(name, description){
  $("#cardHolder").append("<div class='col-lg-3 col-md-4 col-sm-6'>\
                <div class='card card-blue'>\
                  <div class='card-main'>\
                    <div class='card-inner'>\
                      <p class='card-heading text-blue'>"+name+"</p>\
                      <p>"+ description+"\
                      </p>\
                    </div>\
                    <div class='card-action'>\
                      <ul class='nav nav-list pull-left'>\
                        <li>\
                          <a href='javascript:void(0)'><span class='access-hide'>Add</span><span class='icon icon-add'></span></a>\
                        </li>\
                        <li>\
                          <a href='javascript:void(0)'><span class='access-hide'>Add</span><span class='icon icon-favorite-outline'></span></a>\
                        </li>\
                      </ul>\
                    </div>\
                  </div>\
                </div>\
              </div>");
}

function createEventCard(name, description){
   $("#cardHolder").append("<div class='col-lg-3 col-md-4 col-sm-6'>\
                <div class='card card-green'>\
                  <div class='card-main'>\
                    <div class='card-inner'>\
                      <p class='card-heading text-blue'>"+name+"</p>\
                      <p>"+ description+"\
                      </p>\
                    </div>\
                    <div class='card-action'>\
                      <ul class='nav nav-list pull-left'>\
                        <li>\
                          <a href='javascript:void(0)'><span class='access-hide'>Add</span><span class='icon icon-add'></span></a>\
                        </li>\
                        <li>\
                          <a href='javascript:void(0)'><span class='access-hide'>Add</span><span class='icon icon-favorite-outline'></span></a>\
                        </li>\
                      </ul>\
                    </div>\
                  </div>\
                </div>\
              </div>");
}

function createTermCard(name, description){
   $("#cardHolder").append("<div class='col-lg-3 col-md-4 col-sm-6'>\
                <div class='card card-red'>\
                  <div class='card-main'>\
                    <div class='card-inner'>\
                      <p class='card-heading text-blue'>"+name+"</p>\
                      <p>"+ description+"\
                      </p>\
                    </div>\
                    <div class='card-action'>\
                      <ul class='nav nav-list pull-left'>\
                        <li>\
                          <a href='javascript:void(0)'><span class='access-hide'>Add</span><span class='icon icon-add'></span></a>\
                        </li>\
                        <li>\
                          <a href='javascript:void(0)'><span class='access-hide'>Add</span><span class='icon icon-favorite-outline'></span></a>\
                        </li>\
                      </ul>\
                    </div>\
                  </div>\
                </div>\
              </div>");
}


function chooseCard(type, name, description)
{
  if (type == "event") {
    createEventCard(name, description);
  };
  if (type == "person") {
    createPersonCard(name, description);
  };
  if (type == "definition") {
    createTermCard(name, description);
  };
}