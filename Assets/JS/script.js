// The function below will helps us to update our time and date (Time will update per (live) seconds)
function Time() {
    var dateandTimeElement = $('.date');
    var currentDate = dayjs().format('dddd, MMMM D, YYYY| hh:mm:ss A');
    dateandTimeElement.text(currentDate);
  }

$(document).ready(function() {
    
    // We are creating a clock event so that whenever user enter text and click save button then the input will get save in localstorage
    $('.saveBtn').on('click', function(event){
    event.preventDefault();
    var timeId = $(this).parent().attr('id');
    var Input = $(this).siblings('textarea').val();
    localStorage.setItem(timeId, Input);
    });
  
// In here we are taking the current hour of the day using dayjs and the function below will refresh the color of each time block based on whether it's in the past(grey), present(red), or future(green) relative to the current time.
    $('.time-block').each(function(){
        var currentHour = dayjs().hour();
        var timeBlockHours = parseInt($(this).attr('id'));
        if (timeBlockHours < currentHour){
            $(this).addClass('past');
        }  
        else if(timeBlockHours === currentHour){
            $(this).addClass('present');
        } else {
             $(this).addClass('future');
        }
        // This is will help in taking user description or input from localstorage to set textarea for selected time block.
        var timeId = $(this).attr('id');
        var savedInputs = localStorage.getItem(timeId);
         if (savedInputs){
        $(this).find('textarea').val(savedInputs);
        
    }});
 });

// We are setting interval of per second in order to make our clock as live timer.
 setInterval(Time, 1000)
