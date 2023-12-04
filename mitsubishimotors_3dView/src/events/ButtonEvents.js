function ButtonEvents() {
    $(".selector-box span:first-child")
        .click(function () {
            var btn = $(this);
            $(".selector-box .active").removeClass("active");
            setTimeout(function () {
                btn.addClass("active");
            }, 300);
        });
};

export default ButtonEvents;