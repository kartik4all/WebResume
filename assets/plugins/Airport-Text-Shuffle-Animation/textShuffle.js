$("#menuButton").click(function () {

  console.log("checkkk");
    var $randomNumber = $('.nbr');
    var $timer = 20;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["K", "A", "R", "T", "I", "K", "."];

    $randomNumber.each(function () {
      change = Math.round(Math.random() * 100);
      $(this).attr('data-change', change);
    });

    function random() {
      return Math.round(Math.random() * 9);
    };

    function select() {
      return Math.round(Math.random() * $randomNumber.length + 1);
    };

    function value() {
      $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
      $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
      $data++;

      $randomNumber.each(function () {
        if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
          index = $('.ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('nbr');
        }
      });
    };
    $it = setInterval(value, $timer);
  });