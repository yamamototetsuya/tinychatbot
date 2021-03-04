var TINYBOT = TINYBOT || {};

//fallback
var anchorme = anchorme || function(s){return s;};

TINYBOT.get_response = function(s){

    let ndb = this.normalize_db;

    // normalize question word
    let ns = s.toLowerCase();
    for(let i=0; i<ndb.length; i++){
        let normal_name = ndb[i][0];
        let alias = ndb[i];
        if (alias.length == 1) { continue; }
        for(let j=1; j<alias.length; j++){
            if (ns.indexOf(alias[j]) != -1){
                ns = ns.replace(alias[j], normal_name);
                break;
            }
        }
    }

    let rdb = this.response_db;

    // search for suitable response
    for(let i=rdb.length-1; i>=0; i--){
        let c = rdb[i];
        let f = 1;
        let words = c[0].split(",");
        for (let j=0; j<words.length; j++){
            if (ns.indexOf(words[j]) == -1) {
                f = 0;
                break;
            }
        }
        if (f == 1) {
            return c[1];
        }
    }
    return this.default_comments[Math.floor(Math.random() * this.default_comments.length)];
};

TINYBOT.echo_input = function(s) {
    let d = document.createElement("div");
    d.classList.add(this.your_class);
    d.innerHTML = this.your_name + " : " + s;
    this.chatarea.appendChild(d);
};

TINYBOT.show_response = function(s){
    let d = document.createElement("div");
    d.classList.add(this.ai_class);
    let r = this.get_response(s);
    d.innerHTML = anchorme(this.ai_name + " : " + r);
    this.chatarea.appendChild(d);
};

TINYBOT.send_chat = function() {
    const t = this.chatwindow.value;
    if (t == "") {
        return;
    }
    // echo
    this.echo_input(t);
    // response
    this.show_response(t);
    window.scroll(0, 100000); //iikagen
    this.chatwindow.value = "";
    this.chatwindow.focus();
};

TINYBOT.check_enter = function(e) {
    if (e.keyCode == 13) {
        this.sendbutton.click();
    }
};

TINYBOT.init_app = function() {
    this.chatarea = document.getElementById("tinybot_chatarea");
    this.chatwindow = document.getElementById("tinybot_input");
    this.chatwindow.addEventListener('keypress', this.check_enter.bind(this));
    this.sendbutton = document.getElementById("tinybot_send");
    this.sendbutton.addEventListener('click', this.send_chat.bind(this));
    this.show_response("#init");
    this.chatwindow.focus();
};

TINYBOT.your_name = '&#12354;&#12394;&#12383;';
TINYBOT.your_class = 'you_note';
TINYBOT.ai_name = '&#12504;&#12523;&#12503;';
TINYBOT.ai_class = 'ai_note';

window.addEventListener('load', function(){
    TINYBOT.init_app.bind(TINYBOT)();
});

