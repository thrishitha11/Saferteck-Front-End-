// Sample data
const students = [
    {
      "id": 1,
      "name": "John Doe",
      "ticketNumber": "T123",
      "ticketTopic": "Mathematics",
      "examGrade": 8,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "ticketNumber": "T456",
      "ticketTopic": "Physics",
      "examGrade": 6,
      "ratingGrade": 9,
      "comments": ""
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "ticketNumber": "T789",
      "ticketTopic": "Chemistry",
      "examGrade": 7,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "ticketNumber": "T987",
      "ticketTopic": "Biology",
      "examGrade": 5,
      "ratingGrade": 6,
      "comments": ""
    },
    {
      "id": 5,
      "name": "Eva White",
      "ticketNumber": "T654",
      "ticketTopic": "History",
      "examGrade": 9,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 6,
      "name": "Michael Johnson",
      "ticketNumber": "T321",
      "ticketTopic": "Geography",
      "examGrade": 3,
      "ratingGrade": 2,
      "comments": ""
    },
    {
      "id": 7,
      "name": "Emily Davis",
      "ticketNumber": "T852",
      "ticketTopic": "Literature",
      "examGrade": 2,
      "ratingGrade": 4,
      "comments": ""
    },
    {
      "id": 8,
      "name": "William Wilson",
      "ticketNumber": "T147",
      "ticketTopic": "Computer Science",
      "examGrade": 8,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 9,
      "name": "Olivia Miller",
      "ticketNumber": "T258",
      "ticketTopic": "Art",
      "examGrade": 7,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 10,
      "name": "James Taylor",
      "ticketNumber": "T369",
      "ticketTopic": "Music",
      "examGrade": 6,
      "ratingGrade": 6,
      "comments": ""
    },
    {
      "id": 11,
      "name": "Sophia Lee",
      "ticketNumber": "T753",
      "ticketTopic": "Physical Education",
      "examGrade": 9,
      "ratingGrade": 9,
      "comments": ""
    },
    {
      "id": 12,
      "name": "Liam Clark",
      "ticketNumber": "T951",
      "ticketTopic": "Economics",
      "examGrade": 5,
      "ratingGrade": 5,
      "comments": ""
    },
    {
      "id": 13,
      "name": "Ava Hall",
      "ticketNumber": "T246",
      "ticketTopic": "Psychology",
      "examGrade": 8,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 14,
      "name": "Logan King",
      "ticketNumber": "T579",
      "ticketTopic": "Sociology",
      "examGrade": 7,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 15,
      "name": "Mia Evans",
      "ticketNumber": "T804",
      "ticketTopic": "Anthropology",
      "examGrade": 6,
      "ratingGrade": 6,
      "comments": ""
    }
  ];
  
  // Function to populate table with student data
  function populateTable() {
    const tbody = document.querySelector('#gradebook tbody');
    tbody.innerHTML = '';
  
    students.forEach((student, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.ticketNumber}</td>
        <td>${student.ratingGrade}</td>
        <td>${student.examGrade}</td>
        <td>${calculateFinalGrade(student)}</td>
        <td>${calculateStatus(student)}</td>
        <td><button class="detailsBtn" data-index="${index}">Details</button></td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Function to calculate final grade
  function calculateFinalGrade(student) {
    return 0.6 * student.examGrade + 0.4 * student.ratingGrade;
  }
  
  // Function to calculate status
  function calculateStatus(student) {
    return calculateFinalGrade(student) > 4 ? 'Passed' : 'Failed';
  }
  
  // Function to calculate statistics
  function calculateStatistics() {
    const totalStudents = students.length;
    const passedStudents = students.filter(student => calculateFinalGrade(student) > 4).length;
    const failedStudents = totalStudents - passedStudents;
    const averageGrade = students.reduce((acc, student) => acc + calculateFinalGrade(student), 0) / totalStudents;
    const maxGrade = Math.max(...students.map(student => calculateFinalGrade(student)));
    const minGrade = Math.min(...students.map(student => calculateFinalGrade(student)));
  
    return {
      totalStudents,
      passedStudents,
      failedStudents,
      averageGrade,
      maxGrade,
      minGrade
    };
  }
  
  // Function to update statistics HTML
  function updateStatistics(statistics) {
    const statisticsDiv = document.getElementById('statistics');
    statisticsDiv.innerHTML = `
      <h2>Statistics</h2>
      <p>Total Students: ${statistics.totalStudents}</p>
      <p>Passed Students: ${statistics.passedStudents}</p>
      <p>Failed Students: ${statistics.failedStudents}</p>
      <p>Average Grade: ${statistics.averageGrade.toFixed(2)}</p>
      <p>Max Grade: ${statistics.maxGrade}</p>
      <p>Min Grade: ${statistics.minGrade}</p>
    `;
  }
  
  // Function to show statistics
  function showStatistics() {
    const statisticsDiv = document.getElementById('statistics');
    const isHidden = statisticsDiv.classList.contains('hidden');
  
    if (isHidden) {
      const statistics = calculateStatistics();
      updateStatistics(statistics);
      statisticsDiv.classList.remove('hidden');
      document.getElementById('showStatsBtn').textContent = 'Hide Statistics';
    } else {
      statisticsDiv.classList.add('hidden');
      document.getElementById('showStatsBtn').textContent = 'Show Statistics';
    }
  }
  
  // Event listener for show statistics button
  document.getElementById('showStatsBtn').addEventListener('click', showStatistics);
  
  // Event listener for closing details modal when clicking outside the modal
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target == modal) {
      closeDetailsModal();
    }
  });
  
  // Event listener for closing details modal when pressing the escape key
  document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeDetailsModal();
    }
  });
  
  // Event listener for details buttons
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('detailsBtn')) {
      const index = event.target.getAttribute('data-index');
      const student = students[index];
      displayDetailsModal(student);
    }
  });
  
  // Function to display details modal
  function displayDetailsModal(student) {
    const modal = document.getElementById('detailsModal');
    modal.innerHTML = `
      <h2>Details</h2>
      <button id="closeDetailsBtn">&times;</button>
      <p>Name: ${student.name}</p>
      <p>Ticket Number: ${student.ticketNumber}</p>
      <p>Rating Grade: ${student.ratingGrade}</p>
      <p>Exam Grade: ${student.examGrade}</p>
      <!-- Add more details here as needed -->
    `;
    modal.classList.remove('hidden');
  
    // Event listener for closing details modal
    document.getElementById('closeDetailsBtn').addEventListener('click', closeDetailsModal);
  }
  
  // Function to close details modal
  function closeDetailsModal() {
    const modal = document.getElementById('detailsModal');
    modal.classList.add('hidden');
  }
  
  // Initialization
  populateTable();