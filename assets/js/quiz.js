const quizData = {
    "questions": [
      {
        "question": "What is the primary reason Pluto is no longer classified as a planet in our Solar System?",
        "choices": ["It has no atmosphere.", "It is too far from the Sun.", "It does not clear its orbit of other objects.", "It is smaller than Earth's moon."],
        "correct_answer": 2,
        "explanation": "In 2006, the International Astronomical Union redefined a planet. Since Pluto does not clear its orbit, it was reclassified as a 'dwarf planet.'"
      },
      {
        "question": "What planet is known as the 'Red Planet'?",
        "choices": ["Earth", "Venus", "Mars", "Jupiter"],
        "correct_answer": 2,
        "explanation": "Mars is known as the 'Red Planet' due to its reddish appearance caused by iron oxide (rust) on its surface."
      },
      {
        "question": "Which planet has the most moons?",
        "choices": ["Mars", "Jupiter", "Saturn", "Neptune"],
        "correct_answer": 2,
        "explanation": "Saturn has the most confirmed moons of any planet in the Solar System, with over 80 discovered so far."
      },
      {
        "question": "Which planet is closest to the Sun?",
        "choices": ["Venus", "Earth", "Mercury", "Mars"],
        "correct_answer": 2,
        "explanation": "Mercury is the closest planet to the Sun, with an average distance of only about 58 million kilometers."
      },
      {
        "question": "What is the largest planet in our Solar System?",
        "choices": ["Earth", "Neptune", "Jupiter", "Saturn"],
        "correct_answer": 2,
        "explanation": "Jupiter is the largest planet in our Solar System, with a diameter about 11 times that of Earth."
      },
      {
        "question": "What is the smallest planet in our Solar System?",
        "choices": ["Mars", "Venus", "Earth", "Mercury"],
        "correct_answer": 3,
        "explanation": "Mercury is the smallest planet in our Solar System, with a diameter about 38% that of Earth."
      },
      {
        "question": "What planet has the highest mountain in the Solar System?",
        "choices": ["Mars", "Earth", "Jupiter", "Venus"],
        "correct_answer": 0,
        "explanation": "Mars has the highest mountain in the Solar System, Olympus Mons, which stands about 22 kilometers high."
      },
      {
        "question": "What planet has the most extended day relative to its year?",
        "choices": ["Earth", "Venus", "Mars", "Mercury"],
        "correct_answer": 1,
        "explanation": "Venus has a day longer than its year. One rotation takes 243 Earth days, while it orbits the Sun in about 225 Earth days."
      },
      {
        "question": "Which planet in our Solar System is known for its rings?",
        "choices": ["Earth", "Mars", "Saturn", "Uranus"],
        "correct_answer": 2,
        "explanation": "Saturn is famous for its spectacular ring system, composed mostly of ice particles and rocky debris."
      },
      {
        "question": "What planet is often called Earth's 'sister planet' due to its similar size and composition?",
        "choices": ["Mars", "Venus", "Jupiter", "Neptune"],
        "correct_answer": 1,
        "explanation": "Venus is called Earth's 'sister planet' because it is similar in size, mass, and composition, though it has a much hotter climate."
      },
      {
        "question": "Which planet has a storm called the Great Red Spot?",
        "choices": ["Mars", "Venus", "Jupiter", "Saturn"],
        "correct_answer": 2,
        "explanation": "Jupiter has a giant storm called the Great Red Spot, a massive, high-pressure region that has existed for hundreds of years."
      },
      {
        "question": "What is the main component of the Sun?",
        "choices": ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
        "correct_answer": 2,
        "explanation": "The Sun is primarily composed of hydrogen, which makes up about 75% of its mass."
      },
      {
        "question": "What galaxy do we live in?",
        "choices": ["Andromeda Galaxy", "Milky Way Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy"],
        "correct_answer": 1,
        "explanation": "We live in the Milky Way Galaxy, a barred spiral galaxy that contains billions of stars, including our own Sun."
      },
      {
        "question": "Which planet rotates on its side?",
        "choices": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "correct_answer": 2,
        "explanation": "Uranus has a unique rotation axis tilted by about 98 degrees, causing it to rotate on its side."
      },
      {
        "question": "How long does it take for Earth to complete one orbit around the Sun?",
        "choices": ["24 hours", "365 days", "30 days", "12 hours"],
        "correct_answer": 1,
        "explanation": "It takes Earth about 365 days, or one year, to complete its orbit around the Sun."
      },
      {
        "question": "What is the most common type of star in the Milky Way?",
        "choices": ["Red dwarf", "White dwarf", "Supergiant", "Neutron star"],
        "correct_answer": 0,
        "explanation": "Red dwarfs are the most common type of star in the Milky Way, comprising roughly 70-80% of all stars."
      },
      {
        "question": "Which planet has the largest volcano in the Solar System?",
        "choices": ["Earth", "Mars", "Jupiter", "Venus"],
        "correct_answer": 1,
        "explanation": "Mars has the largest volcano in the Solar System, Olympus Mons, which is around 22 kilometers high."
      },
      {
        "question": "What element is most abundant in the Earth's atmosphere?",
        "choices": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "correct_answer": 1,
        "explanation": "Nitrogen is the most abundant element in Earth's atmosphere, making up around 78% of it."
      },
      {
        "question": "What planet is the hottest in our Solar System?",
        "choices": ["Mars", "Venus", "Mercury", "Jupiter"],
        "correct_answer": 1,
        "explanation": "Venus is the hottest planet in our Solar System due to its thick atmosphere, which traps heat through a greenhouse effect."
      },
      {
        "question": "What is the name of our galaxy's closest neighboring galaxy?",
        "choices": ["Andromeda Galaxy", "Whirlpool Galaxy", "Triangulum Galaxy", "Large Magellanic Cloud"],
        "correct_answer": 0,
        "explanation": "The Andromeda Galaxy is the closest large galaxy to the Milky Way and is on a collision course with our galaxy."
      }
    ]
};
  
// Function to get a random question with choices
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * quizData.questions.length);
    const questionData = quizData.questions[randomIndex];
    return {
        question: questionData.question,
        choices: questionData.choices,
        correctAnswer: questionData.correct_answer,
        explanation: questionData.explanation
    };
}

// Function to populate the form with a question and choices
async function displayQuestion() {
    let quizQuestion = getRandomQuestion(quizData);

    // Populate the question text
    document.getElementById("question").innerText = quizQuestion.question;
    console.log(quizQuestion);

    // Populate the choices in the dropdown
    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = '';  // Clear any existing options

    quizQuestion.choices.forEach((choice, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = choice;
        choicesElement.add(option);
    });

    // Store the correct answer and explanation for later
    document.getElementById("quizForm").dataset.correctAnswer = parseInt(quizQuestion.correctAnswer);
    document.getElementById("quizForm").dataset.explanation = quizQuestion.explanation;
}

// Check the selected answer on form submit
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    const selectedChoiceIndex = parseInt(document.getElementById("choices").value);
    const correctAnswer = parseInt(this.dataset.correctAnswer);
    const explanation = this.dataset.explanation;
    const resultElement = document.getElementById("result");

    if (selectedChoiceIndex === correctAnswer) {
        resultElement.innerHTML = `<div class="alert alert-success alert-dismissible fade show" id="success" style="display: block;" role="alert">
                <h4 class="alert-heading"><span class="fe fe-info"></span>&nbsp;Correct!</h4>
                <p>${explanation}</p>
                <hr>
                <p class="mb-0">Too smart, try another one: <button type="button" onclick="window.location.reload();" class="btn btn-link text-white">Next</button></p>
            </div></p>`;
    } else {
        resultElement.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" id="danger" style="display: block;" role="alert">
                <h4 class="alert-heading"><span class="fe fe-info"></span>&nbsp;Incorrect!</h4>
                <p>${explanation}</p>
                <hr>
                <p class="mb-0">Don't be sad, try again: <button type="button" onclick="window.location.reload();" class="btn btn-link text-white">Next</button></p>
            </div></p>`;
    }

    document.getElementById("submit-btn").disabled = true;
});

// Load the question first on page load
displayQuestion();