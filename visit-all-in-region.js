var page = require('webpage').create();
//console.log('The default user agent is ' + page.settings.userAgent);

page.settings.userAgent = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.57 Safari/537.1';

var url = 'http://www.okcupid.com/match?filter1=0,34&filter2=2,21,45&filter3=3,25&filter4=5,31536000&filter5=1,1&filter6=35,2&locid=0&timekey=1&matchOrderBy=LOGIN&custom_search=0&fromWhoOnline=0&mygender=m&update_prefs=1&sort_type=0&sa=1&using_saved_search=';

//try this url, maybe we get more results
//var url = 'http://www.okcupid.com/match?timekey=1344198706&matchOrderBy=SPECIAL_BLEND&use_prefs=1&discard_prefs=1&low=31&count=5000&ajax_load=1';

//var pageTwo = require('webpage').create();
page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
          var aClassName = '.ajax_load_profile_link';
          var list = document.querySelectorAll(aClassName), pizza = [], i;
          for (i = 0; i < list.length; i+=2) {
              pizza.push(list[i].href);
          }
          return pizza;
        });
        //console.log(ua.join('\n'));
    }

    for (i = 0; i < ua.length; i++) {
        console.log(ua[i]);
    }

    phantom.exit();
});
