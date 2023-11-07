$(".sidebar ul li").on('click',function(){
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
});
$('.open-btn').on('click',function(){
    $('.sidebar').addClass('active');
})
$('.close-btn').on('click',function(){
    $('.sidebar').removeClass('active');
})

// Next/Previous Button Action
function navigateTo(tabId){
    var triggerEl = document.querySelector('#'+tabId);
    var tab = bootstrap.Tab.getOrCreateInstance(triggerEl);
    tab.show();
}