const element_timer_on_html = document.getElementById('timer')

let time_left = 300
let time_pass = 0

function start_clock() {
    let time_to_show = time_left - time_pass
    let time_now_to_show_formated = format_time_to_show(time_to_show)

    element_timer_on_html.innerHTML = time_now_to_show_formated

    if ((time_left - time_pass) === 0) {
        element_timer_on_html.innerHTML = "00:00"
    } else {
        time_pass += 1;
        element_timer_on_html.innerHTML = time_now_to_show_formated
        setTimeout(start_clock, 1000)
    }
}

function format_time_to_show(time_to_show) {
    let time = time_to_show;
    let minutes = Math.floor(time/60)
    let seconds = nf((time - minutes * 60), 2);
    
    // minutes = padNumber(minutes)
    // seconds = padNumber(seconds)
    
    return (minutes.toString() + ":" + seconds)  
}

function padNumber(number) {
    let number_formated = number.toString()

    return number_formated.length < 2 ? "0" + number_formated : number_formated
}

start_clock()