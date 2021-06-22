let quotes = [
  [
    "When you see a person without a smile, give them one of yours.",
    "Zig Ziglar",
  ],
  [
    "Make the most of yourself by fanning the tiny inner sparks of possibility into flames of achievement.",
    "Golda Meir",
  ],
  [
    "Use only that which works, and take it from any place you can find it.",
    "Bruce Lee",
  ],
  [
    "Look for the good in every person and every situation. You'll almost always find it.",
    "Brian Tracy",
  ],
  ["We grow fearless when we do the things we fear.", "Robin Sharma"],
  ["Don't let the behavior of others destroy your inner peace.", "Dalai Lama"],
  ["The journey of a thousand miles begins with a single step.", "Lao Tzu"],
  [
    "Every morning we are born again. What we do today is what matters most.",
    "Buddha",
  ],
  [
    "Give yourself permission to slow down. You can speed up by slowing down.",
    "Gabby Bernstein",
  ],
  ["Believe in yourself.", "Unknown"],
  [
    "No one has the power to shatter your dreams unless you give it to them.",
    "Maeve Greyson",
  ],
  [
    "There is real magic in enthusiasm. It spells the difference between mediocrity and accomplishment.",
    "Norman Vincent Peale",
  ],
  [
    "Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy.",
    "Robert Tew",
  ],
  [
    "When you meet people, show real appreciation, then genuine curiosity.",
    "Martha Beck",
  ],
  [
    "The world will ask you who you are, and if you do not know, the world will tell you.",
    "Carl Jung",
  ],
  ["Don't compare your beginning to someone else's middle.", "Jon Acuff"],
  [
    "If you spend too much time thinking about a thing, you'll never get it done.",
    "Bruce Lee",
  ],
  [
    "The only way of finding the limits of the possible is by going beyond them into the impossible.",
    "Arthur C. Clarke",
  ],
  [
    "It's a job that's never started that takes the longest to finish.",
    "J.R.R. Tolkien",
  ],
  [
    "Every person is a new door to a different world.",
    "Six Degrees of Separation",
  ],
  [
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    "Vincent Van Gogh",
  ],
  [
    "It is possible to commit no mistakes and still lose. That is not a weakness; that is life.",
    "Jean Luc Picard",
  ],
  [
    "You have power over your mind, not outside events. Realize this, and you will find strength.",
    "Marcus Aurelius",
  ],
  [
    "All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, deep roots are not reached by the frost.",
    "J.R.R. Tolkien",
  ],
  [
    "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    "Albert Einstein",
  ],
  [
    "Decide whether or not the goal is worth the risks involved. If it is, stop worrying.",
    "Amelia Earhart",
  ],
  ["You are awesome.", "Unknown"],
  [
    "Perseverance is not a long race; it is many short races one after another.",
    "Walter Elliott",
  ],
  [
    "Perfection is not attainable, but if we chase perfection, we can catch excellence.",
    "Vince Lombardi",
  ],
  [
    "If people aren't laughing at your dreams, your dreams aren't big enough.",
    "Grayson Marshall",
  ],
  [
    "This is your life. Do what you love, and do it often.",
    "Holstee Manifesto",
  ],
  [
    "Forget the mistakes of the past and press on to the greater achievements of the future.",
    "Norman Vincent Peale",
  ],
  [
    "We are what we repeatedly do. Excellence then, is not an act, but a habit.",
    "Will Durant",
  ],
  [
    "Forget all the reasons why it won't work and believe the one reason why it will.",
    "Unknown",
  ],
  [
    "Never doubt that you are valuable and powerful and deserving of every chance in the world to pursue your dreams.",
    "Hillary Clinton",
  ],
  [
    "Pursue the things you love doing and then do them so well that people can’t take their eyes off of you.",
    "Maya Angelou",
  ],
  [
    "The world breaks everyone and afterward many are strong at the broken places.",
    "Ernest Hemingway",
  ],
  [
    "The patterns of our lives reveal us. Our habits measure us.",
    "Mary Oliver",
  ],
];

let colors = [
  "865439",
  "39A2DB",
  "FF94CC",
  "A239EA",
  "5C33F6",
  "171717",
  "DA0037",
  "66DE93",
  "FFC107",
  "343A40",
  "47597E",
  "F5A962",
];

function newQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $("#text").text(randomQuote[0]);
  $("#author").text(randomQuote[1]);

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  $("body").css({ "background-color": randomColor });
  $("#new-quote").css({ "background-color": randomColor });
  $("#text").css({ color: randomColor });
  $("#author").css({ color: randomColor });
  $("#tweet-quote").css({ color: randomColor });
}
