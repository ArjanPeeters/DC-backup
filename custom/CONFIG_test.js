var config = {};
config['domoticz_ip'] = 'http://192.168.2.3:8080';
config['app_title'] = 'PeeterSmit';
config['domoticz_refresh'] = '5';
config['dashticz_refresh'] = '60';
config['default_news_url'] = 'http://www.nu.nl/rss/algemeen';
config['news_scroll_after'] = '7';
config['standby_after'] = 0;
config['auto_swipe_back_to'] = 0;
config['auto_swipe_back_after'] = '120';
config['auto_slide_pages'] = 0;
config['slide_effect'] = 'slide';
config['language'] = 'nl_NL';
config['timeformat'] = 'DD-MM-YY HH:mm';
config['calendarformat'] = 'dd DD.MM HH:mm';
config['calendarlanguage'] = 'en_US';
config['calendarurl'] = 0;
config['boss_stationclock'] = 'RedBoss';
config['gm_api'] = 0;
config['gm_zoomlevel'] = 0;
config['gm_latitude'] = 0;
config['gm_longitude'] = 0;
config['wu_api'] = 'af52b020647c1bc1';
config['wu_city'] = 'Haarlem';
config['wu_name'] = 0;
config['wu_country'] = 'NL';
config['idx_moonpicture'] = 0;
config['switch_horizon'] = 0;
config['host_nzbget'] = 0;
config['spot_clientid'] = '387aa87485614002b831c95578969df2';
config['selector_instead_of_buttons'] = 0;
config['auto_positioning'] = 0;
config['use_favorites'] = 0;
config['last_update'] = 0;
config['hide_topbar'] = 1;
config['hide_seconds'] = 1;
config['hide_seconds_stationclock'] = 0;
config['use_fahrenheit'] = 0;
config['use_beaufort'] = 0;
config['translate_windspeed'] = 1;
config['static_weathericons'] = 1;
config['hide_mediaplayer'] = 0;
config['slider_timeout'] = 1000; // 1 sec.

var buttons = {};
buttons.buienradar = {
  key: 'buienradar',
  width:12,
  isimage:true,
  refreshimage:30000,
  image: 'http://api.buienradar.nl/image/1.0/RadarMapNL?w=600&h=600',
  url: 'http://www.buienalarm.nl/widget/graphic?lat=52.38084&lon=4.63683&title=Haarlem&color=4395c7'
};

buttons.webcam = {
  width: 12,
  isimage: true,
  refresh: 5000,
  image: 'http://127.0.0.1:7979/axis-cgi/mjpg/video.cgi?user=admin&pwd=1Qazxsw2&camera=2&resolution=640x360'
}

buttons.webcam1 = {
  width: 12,
  isimage: true,
  refresh: 5000,
  image: 'http://127.0.0.1:7979/axis-cgi/mjpg/video.cgi?user=admin&pwd=1Qazxsw2&camera=1&resolution=640x360'
}

buttons.webcam2 = {
  width: 12,
  isimage: true,
  refresh: 5000,
  image: 'http://127.0.0.1:7979/axis-cgi/mjpg/video.cgi?user=admin&pwd=1Qazxsw2&camera=3&resolution=640x360'
}
buttons.webcam3 = {
  width: 12,
  isimage: true,
  refresh: 5000,
  image: 'http://127.0.0.1:7979/axis-cgi/mjpg/video.cgi?user=admin&pwd=1Qazxsw2&camera=4&resolution=640x360'
}

// Scenes
var blocks = {};

blocks['s2'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-power-off'
}; // Alles uit

blocks['s3'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-television'
}; // TV kijken

blocks['s4'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-cutlery'
}; // Aan tafel

blocks['s5'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-toggle-on'
}; // Alles Aan

blocks['s6'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-fire'
}; // Koken

blocks['s12'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-bed'
}; // Beneden uit



// Schakelaars

blocks[17] = {
  width: 12,
  hide_data: true
}; // Lichtkoof RGBW

blocks[51] = {
  width: 12,
  hide_data: true
}; // tafel

blocks[65] = {
  width: 12,
  hide_data: true
}; // Wand lampen

blocks[81] = {
  width: 12,
  hide_data: true
}; // schemer lampen

blocks[335] = {
  width: 12,
  hide_data: true
}; // Eiland

// sensoren
blocks[125] = {
  width: 6,
  hide_data: true,
  title: 'Keuken'
}; // raam keuken

blocks[130] = {
  width: 6,
  hide_data: true,
  title: 'Daan'
}; // raam daan

blocks[203] = {
  width: 6,
  hide_data: true,
  title: 'Slaapkamer'
}; // raam slaapkamer

blocks[198] = {
  width: 6,
  hide_data: true,
  title: 'Fenna'
}; // raam fenna

blocks[145] = {
  width: 6,
  hide_data: true,
  title: 'Sanne'
}; // raam Sanne

blocks[252] = {
  width: 2,
  hide_data: true,
  title: '',
  icon: 'fa-female'
}; //marijke

blocks[245] = {
  width: 2,
  hide_data: true,
  title: '',
  icon: 'fa-male'
}; //Arjan

//Radio

blocks['s17'] = {
  width: 2,
  title: '',
  icon: 'fa-play',
  hide_data: true
}; //play

blocks['s18'] = {
  width: 2,
  title: '',
  icon: 'fa-pause',
  hide_data: true
}; //pauze

blocks['s19'] = {
  width: 2,
  title: '',
  icon: 'fa-volume-up',
  hide_data: true
}; //volume omhoog

blocks['s20'] = {
  width: 2,
  title: '',
  icon: 'fa-volume-down',
  hide_data: true
}; //volume omlaag

blocks['s21'] = {
  width: 2,
  title: '',
  icon: 'fa-headphones',
  hide_data: true
}; //play

blocks['s16'] = {
  width: 3,
  icon: '',
  hide_data: true
}; //Qmusic

blocks['s15'] = {
  width: 3,
  icon: '',
  hide_data: true
}; //538

blocks['s14'] = {
  width: 3,
  icon: '',
  hide_data: true
}; //3fm

blocks['s13'] = {
  width: 3,
  icon: '',
  hide_data: true
}; //NPO2

blocks[242] = {
  width: 12,
  title: ''
}; //radio selector

blocks[254] = {
  width: 8,
  hide_data: true,
  title: '',
  icon: 'fa-sign-out'
}; //aanwezig

blocks[351] = {
  width: 6,
  gotoslide: 3
} // Camera-motion


// titels
blocks['blocktitle_1'] = {
  type: 'blocktitle',
  title: 'Scenes'
};

blocks['blocktitle_2'] = {
  type: 'blocktitle',
  title: 'Schakelaars'
};

blocks['blocktitle_3'] = {
  type: 'blocktitle',
  title: 'Sensors'
};

blocks['blocktitle_4'] = {
  type: 'blocktitle',
  title: 'Thuis'
};

// kalenders
var calendars = {};
calendars.business = { maxitems: 5, url: 'https://calendar.google.com/calendar/', icalurl: 'https://calendar.google.com/calendar/' };
calendars.private = { maxitems: 5, icalurl: 'https://cors-anywhere.herokuapp.com/https://calendar.google.com/calendar/' };


//kolommen
var columns = {};
columns[1] = {
  width: 3,
  blocks: [
    'blocktitle_1',
    's5',
    's3',
    's4',
    's6',
    's12',
    's2'
  ]
};

columns[2] = {
  width: 5,
  blocks: [
    'blocktitle_2',
    81,
    51,
    65,
    335,
    17,
    's17',
    's18',
    's19',
    's20',
    's21',
    's13',
    's14',
    's15',
    's16'
  ]
};

columns[3] = {
  width: 4,
  blocks: [
    'blocktitle_3',
    125,
    130,
    145,
    198,
    203,
    'blocktitle_4',
    245,
    252,
    254
  ]
};

columns[4] = {
  width: 6,
  blocks: [
    buttons.buienradar
  ]
};

columns[5] = {
  width: 6,
  blocks: [
    'clock',
    'sunrise',
    'currentweather_big',
    'weather',
  ]
};

columns[6] = {
  width: 6,
  blocks: [
    buttons.webcam,
    buttons.webcam1
  ]
};

columns[7] = {
  width: 6,
  blocks: [
    buttons.webcam2,
    buttons.webcam3
  ]
}

/*
columns[7] = {
  width: 8,
  blocks: [
    buttons.buienradar
  ]
};


columns[8] = {
  width: 4,
  blocks: [
    's2',
    'blocktitle_3',
    125,
    130,
    135,
    140,
    145
  ]
};
*/

var screens = {}

screens['default'] = {}
screens['default'][1] = {}
screens['default'][1]['columns'] = [1,2,3]
screens['default'][2] = {}
screens['default'][2]['columns'] = [4,5]
screens['default'][3] = {}
screens['default'][3]['columns'] = [6,7]
/*
screens['tablet'] = {}
screens['tablet']['maxwidth'] = 1280;
screens['tablet']['maxheight'] = 800;
screens['tablet'][1] = {}
screens['tablet'][1]['columns'] = [7,8]
*/
