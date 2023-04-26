$(function(){
    function timer() {
        var endTime = new Date("11 November 2022 00:00:00 GMT+09:00");			
            endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html("<span>DAYS</span><b>"+ days + "</b>");
        $("#hours").html("<span>HOURS</span><b>"+ hours + "</b>");
        $("#minutes").html("<span>MINS</span><b>"+ minutes + "</b>");
        $("#seconds").html("<span>SECS</span><b>"+ seconds + "</b>");		
    }
    setInterval(function() { timer(); }, 1000);

    timer();

    const s = $('.slash_box');
    s.each(function (){
        let t = $(this),
            c = 50;
            h = '';

        for(let i = 0; i < c; i++){
            h += `<span class="bar"></span>`;
        }
        t.html(h);
    });
});