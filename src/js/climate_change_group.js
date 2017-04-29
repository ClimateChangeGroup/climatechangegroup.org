import jQuery from 'jquery';

(function ($) {
  // Close the responsive menu on item click
  $('.navbar-collapse ul li a').click(() => {
    $('.navbar-toggle:visible').click();
  });

  // Floating label headings for the contact form
  $('body').on('input propertychange', '.floating-label-form-group', function(e) {
      $(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val());
  }).on('focus', '.floating-label-form-group', function() {
      $(this).addClass('floating-label-form-group-with-focus');
  }).on('blur', '.floating-label-form-group', function() {
      $(this).removeClass('floating-label-form-group-with-focus');
  });

  // href handling for tabs
  function handleHashChange() {
    const hash = window.location.hash;
    if (hash) {
      $(`a[href="${hash}"]`).tab('show');
    }
  }

  function handleTabClick() {
    $(this).tab('show');
    window.location.hash = this.hash;
    $('html,body').scrollTop(0);
  }

  $(window).bind('hashchange', handleHashChange);

  $('[data-toggle="tab"]').click(handleTabClick);

  $('a.navbar-brand').click(() => {
    window.location.hash = '';
    $('.navbar-nav li').removeClass('active');
  });

  // handle initial load
  handleHashChange();
})(jQuery);
