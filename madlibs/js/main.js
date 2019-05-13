
$(document).ready(function () {
    //init background text
    var height_bg = $(window).height * 100;
    var width_bg = $(window).width * 100;
    // $('.div-words-bg').height(height_bg);
    // $('.div-words-bg').width(width_bg);
    // $('.div-words-bg').css('top', '-550px');
    // $('.div-words-bg').css('left', '-15px');
    fillWithWords();

    // update background text on input
    var inputText = "";
    var wordCount = 0;
    var wordClass = "";
    var l;
    $('.input').keypress(function(e){
        inputText = $(this).val(); 
        if(e.keyCode == 13 && inputText.trim() != '') { 
            wordClass = '.p-' + (wordCount+1).toString();
            // add whitespace to character 
            while(inputText.length <= 22)
                inputText = "&#160;" + inputText + "&#160;";
            if(inputText.length==21)
                inputText = "&#160;" + inputText;

            $(wordClass).html(inputText); 
            $(wordClass).addClass("fadeIn");
            wordCount++;
            $(this).val('');
        }
    });
    


    $.fn.textWidth = function(){
        var html_org = $(this).html();
        var html_calc = '<p>' + html_org + '</p>';
        $(this).html(html_calc);
        var width = $(this).find('p:first').width();
        $(this).html(html_org);
        return width;
      };
});
 
function fillWithWords() {
    var i;
    var s = '';
    var nFont=1;
    for(i=0; i < 120; i++){
        s += '<p class="p-' + nFont + '">' + createWord(22) + '</p>';  
        nFont++;
        if(nFont>8)
            nFont=1;
    }  
    $('.div-words-bg').append(s); 
}

  function createWord(length) {
     var result           = '';
     var lowercaseCharacters       = 'abcdefghijklmnopqrstuvwxyz';
     var uppercaseCharacters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     var charactersLength = lowercaseCharacters.length;
    //  result += uppercaseCharacters.charAt(Math.floor(Math.random() * charactersLength));
    result += "X";
    for ( var i = 0; i < length-1; i++ ) {
        // result += lowercaseCharacters.charAt(Math.floor(Math.random() * charactersLength));
        result += "X";
    }
     return result;
  }