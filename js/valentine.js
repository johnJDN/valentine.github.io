// List of text values to rotate through
// List of 100 unique variations of "Yes"
const buttonTexts = [
  'Absolutely!',
  'For Sure!',
  'Yes Please!',
  'Definitely!',
  'You Bet!',
  'Affirmative!',
  'Totally!',
  'Of Course!',
  'Always!',
  'Sure Thing!',
  'Without a Doubt!',
  'Naturally!',
  'Indubitably!',
  'Positively!',
  'No Doubt!',
  'By All Means!',
  'Yep!',
  'Yeah!',
  'Uh-huh!',
  'Yasss!',
  'For Real!',
  'Confirmed!',
  'You Know It!',
  'Right On!',
  'Amen to That!',
  'Aye Aye!',
  'Gotcha!',
  'Indeed!',
  'Hell Yes!',
  'Oh Yeah!',
  'Count Me In!',
  'No Question!',
  'Sure Enough!',
  'Unquestionably!',
  'Certainly!',
  'Always Yes!',
  'Yeah Baby!',
  'Okeydokey!',
  'Yes Sir!',
  'Will Do!',
  'Darn Right!',
  'Most Definitely!',
  'Heck Yes!',
  'Yes Indeedy!',
  'Yes Siree!',
  'Absolutely Yes!',
  'I’m In!',
  'That’s Correct!',
  'Sure as the Sun!',
  'Betcha!',
  'Count On Me!',
  'Yes-a-roonie!',
  'Sounds Great!',
  'Right You Are!',
  'Yeppers!',
  'Very True!',
  'I’m Down!',
  'I’m Game!',
  'Let’s Go!',
  'Why Not!',
  'Can’t Say No!',
  'All the Way!',
  'Certainly So!',
  'Naturally So!',
  'With Pleasure!',
  'Oh Totally!',
  'We’re On!',
  'Can Confirm!',
  'Happy To!',
  'Always Happy To!',
  'All For It!',
  'Heck Yeah!',
  'Totally Down!',
  'Definitely Yes!',
  'Yes in Every Way!',
  'No Doubt About It!',
  'Absolutely Indeed!',
  '100% Yes!',
];

let currentIndex = 0;

// Select the "Yes" button
const yesButton = document.querySelector('button[onclick*="thankyou.html"]');

// Add a click event listener to the "No" button
const noButton = document.getElementById('noButton');
noButton.addEventListener('click', function () {
  // Update the "Yes" button's text
  currentIndex = (currentIndex + 1) % buttonTexts.length; // Cycle through the list
  yesButton.textContent = buttonTexts[currentIndex];

  // Increase the font size of the "Yes" button
  const currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = currentFontSize + 10 + 'px';
});
