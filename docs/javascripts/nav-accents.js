// Two-tone the left-nav section headers (white base + green/orange accent),
// matching the landing-page title style. Nav labels are plain text, so we
// rewrite them client-side.
(function () {
  var map = {
    'Introduction & Ecosystem': 'Introduction &amp; <span class="g">Ecosystem</span>',
    'Protocol & Launch':        'Protocol &amp; <span class="g">Launch</span>',
    'Protection & Guardrails':  'Protection &amp; <span class="o">Guardrails</span>',
    'Profiles & Edge Social':   'Profiles &amp; <span class="g">Edge Social</span>',
    'Tiers & Referrals':        'Tiers &amp; <span class="g">Referrals</span>',
    'Trading Terminal':         'Trading <span class="g">Terminal</span>',
    'Creator Deployment':       'Creator <span class="g">Deployment</span>',
    'Security & Support':       'Security &amp; <span class="o">Support</span>'
  };
  function apply() {
    document
      .querySelectorAll('.md-nav__item--section > .md-nav__link .md-ellipsis')
      .forEach(function (el) {
        var t = el.textContent.trim();
        if (map[t]) el.innerHTML = map[t];
      });
  }
  if (document.readyState !== 'loading') apply();
  else document.addEventListener('DOMContentLoaded', apply);
})();
