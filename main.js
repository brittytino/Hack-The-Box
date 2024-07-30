document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What kind of database system uses tables to organize data?",
            answers: ["Relational Database", "SQL Database", "RDBMS"],
            keyword: "QC-001"
        },
        {
            question: "Which concept involves securing the boundaries of a network to protect data and resources?",
            answers: ["Network Security", "Cybersecurity", "Network Protection"],
            keyword: "BC-002"
        },
        {
            question: "What is the term for a unique identifier for a node in a network?",
            answers: ["MAC Address", "Physical Address", "Hardware Address"],
            keyword: "NN-003"
        },
        {
            question: "What is the name of the algorithm used for sorting that divides the array into smaller sub-arrays?",
            answers: ["MergeSort", "Merge Sort", "Mergesort"],
            keyword: "AL-004"
        },
        {
            question: "Which network topology has all nodes connected to a central hub?",
            answers: ["Star", "Star Topology", "Hub-and-Spoke"],
            keyword: "ML-005"
        },
        {
            question: "What type of malware disguises itself as legitimate software?",
            answers: ["Trojan", "Trojan Horse", "Trojan Virus"],
            keyword: "CAR-006"
        },
        {
            question: "Which programming language is known for its use in statistical computing and graphics?",
            answers: ["R", "R Language", "R Programming"],
            keyword: "TREE-007"
        },
        {
            question: "What is the process of finding errors and fixing them in software called?",
            answers: ["Debugging", "Bug Fixing", "Troubleshooting"],
            keyword: "GH-008"
        },
        {
            question: "Which algorithm is used to find the shortest path in a graph?",
            answers: ["Dijkstra", "Dijkstra's Algorithm", "Shortest Path Algorithm"],
            keyword: "BIKE-009"
        },
        {
            question: "What data structure uses the LIFO principle?",
            answers: ["Stack", "LIFO Stack", "Last In First Out"],
            keyword: "CS-010"
        },
        {
            question: "What is the primary language used for developing Android apps?",
            answers: ["Java", "Kotlin", "Android Java"],
            keyword: "IoT-011"
        },
        {
            question: "What protocol is used to securely transfer hypertext on the web?",
            answers: ["HTTPS", "HTTP Secure", "Secure HTTP"],
            keyword: "AI-012"
        },
        {
            question: "What is the technique called that improves the performance of a system by dividing tasks among multiple processors?",
            answers: ["Parallel Processing", "Parallel Computing", "Multithreading"],
            keyword: "PY-013"
        },
        {
            question: "What term describes a function that calls itself?",
            answers: ["Recursive Function", "Recursion", "Self-Calling Function"],
            keyword: "CB-014"
        },
        {
            question: "What is the term for the simultaneous execution of multiple tasks in a single CPU?",
            answers: ["Concurrent Execution", "Concurrency", "Multitasking"],
            keyword: "VR-015"
        }
    ];
    

    let currentQuestionIndex = 0;
    let attempts = 0;
    const maxAttempts = 3;
    const questionNumberElement = document.getElementById('question-number');
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-button');
    const keywordContainer = document.getElementById('keyword-container');
    const keywordElement = document.getElementById('keyword');
    const navigationButtonsContainer = document.getElementById('navigation-buttons');
    const copyButton = document.getElementById('copy-button');

    function showQuestion(index) {
        currentQuestionIndex = index;
        attempts = 0;
        questionNumberElement.textContent = `Question ${index + 1}`;
        questionElement.textContent = questions[index].question;
        answerInput.value = '';
        answerInput.focus();
        keywordContainer.classList.add('hidden');
        keywordContainer.classList.remove('animate__fadeInDown');
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
            keywordElement.textContent = questions[currentQuestionIndex].keyword;
            keywordContainer.classList.remove('hidden');
            keywordContainer.classList.add('animate__fadeInDown');
            if (attempts === 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Excellent!',
                    text: 'You nailed it on the first try!',
                    showClass: {
                        popup: 'animate__animated animate__heartBeat'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            } else if (attempts === 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Well Done!',
                    text: 'Got it on the second try!',
                    showClass: {
                        popup: 'animate__animated animate__bounceIn'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            }
            attempts = 0;
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'That was your third attempt! The correct answer remains a secret for now. Try again with the same question!',
                    footer: '<a href="www.tinobritty.tech">Summa Inga thottu Paaren :)</a>',
                    showClass: {
                        popup: 'animate__animated animate__bounceIn'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__bounceOut'
                    }
                });
                attempts = 0;
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Try Again!',
                    text: `Incorrect answer. You have ${maxAttempts - attempts} attempt(s) left.`,
                    showClass: {
                        popup: 'animate__animated animate__shakeX'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            }
        }
    });

    questions.forEach((_, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.className = 'm-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out';
        button.addEventListener('click', () => showQuestion(index));
        navigationButtonsContainer.appendChild(button);
    });

    showQuestion(0);

    copyButton.addEventListener('click', () => {
        copyToClipboard(keywordElement.textContent);
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Keyword has been copied to clipboard.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    });

    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });
});