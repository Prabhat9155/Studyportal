// Constants
const ADMIN_EMAIL = "admin@engineer.com";
const ADMIN_PASS = "admin123";
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// State Management
let currentUser = null;
let users = JSON.parse(localStorage.getItem("users")) || [];
let materials = JSON.parse(localStorage.getItem("materials")) || [];
let downloads = JSON.parse(localStorage.getItem("downloads")) || 0;

// DOM Elements
const elements = {
  headerButtons: document.getElementById('headerButtons'),
  userInfoDisplay: document.getElementById('userInfoDisplay'),
  alertContainer: document.getElementById('alertContainer'),
  welcomeSection: document.getElementById('welcomeSection'),
  loginForm: document.getElementById('loginForm'),
  registerForm: document.getElementById('registerForm'),
  adminDashboard: document.getElementById('adminDashboard'),
  materialsSection: document.getElementById('materialsSection'),
  materialsGrid: document.getElementById('materialsGrid'),
  searchInput: document.getElementById('searchInput'),
  branchFilter: document.getElementById('branchFilter'),
  semesterFilter: document.getElementById('semesterFilter'),
  totalMaterials: document.getElementById('totalMaterials'),
  totalUsers: document.getElementById('totalUsers'),
  totalDownloads: document.getElementById('totalDownloads')
};

// Initialize App
function init() {
  checkAuthStatus();
  updateUI();
  attachEventListeners();
}

// Check Authentication Status
function checkAuthStatus() {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
}

// Update UI Based on Auth Status
function updateUI() {
  const isLoggedIn = currentUser !== null;
  const isAdmin = currentUser?.role === "admin";

  // Update header buttons
  elements.headerButtons.innerHTML = '';

  if (!isLoggedIn) {
    elements.headerButtons.innerHTML = `
      <button onclick="showLogin()" class="btn btn-primary">
        <i class="fas fa-sign-in-alt"></i> Login
      </button>
      <button onclick="showRegister()" class="btn btn-secondary">
        <i class="fas fa-user-plus"></i> Register
      </button>
      <a href="home.html" class="btn btn-secondary">
        <i class="fas fa-home"></i> Home
      </a>
    `;
    elements.welcomeSection.classList.remove('hidden');
    elements.userInfoDisplay.classList.add('hidden');
    elements.adminDashboard.classList.add('hidden');
    elements.materialsSection.classList.add('hidden');
  } else {
    elements.headerButtons.innerHTML = `
      ${isAdmin ? '<button onclick="toggleAdminDashboard()" class="btn btn-primary"><i class="fas fa-tachometer-alt"></i> Dashboard</button>' : ''}
      <button onclick="viewMaterials()" class="btn btn-secondary">
        <i class="fas fa-folder-open"></i> Materials
      </button>
      <a href="index.html" class="btn btn-secondary">
        <i class="fas fa-gamepad"></i> Quiz
      </a>
      <a href="home.html" class="btn btn-secondary">
        <i class="fas fa-home"></i> Home
      </a>
      <button onclick="logout()" class="btn btn-danger">
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    `;

    // Show user info
    elements.userInfoDisplay.innerHTML = `
      <div class="user-info">
        <i class="fas fa-user-circle"></i>
        <div class="user-details">
          <h3>Welcome, ${currentUser.name || 'User'}!</h3>
          <p>${isAdmin ? 'Administrator' : 'Student'} Account</p>
        </div>
      </div>
    `;
    elements.userInfoDisplay.classList.remove('hidden');
    elements.welcomeSection.classList.add('hidden');

    if (isAdmin) {
      updateAdminStats();
    }
  }
}

// Show Login Form
function showLogin() {
  elements.loginForm.classList.remove('hidden');
  elements.registerForm.classList.add('hidden');
  elements.welcomeSection.classList.add('hidden');
}

// Show Register Form
function showRegister() {
  elements.registerForm.classList.remove('hidden');
  elements.loginForm.classList.add('hidden');
  elements.welcomeSection.classList.add('hidden');
}

// Show Alert
function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;
  elements.alertContainer.innerHTML = '';
  elements.alertContainer.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

// Form Validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach(el => {
    el.textContent = '';
    el.classList.remove('show');
  });
}

// Register Handler
function handleRegister(e) {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  // Validation
  let hasError = false;

  if (name.length < 3) {
    showError('nameError', 'Name must be at least 3 characters long');
    hasError = true;
  }

  if (!validateEmail(email)) {
    showError('emailError', 'Please enter a valid email address');
    hasError = true;
  }

  if (users.find(u => u.email === email)) {
    showError('emailError', 'This email is already registered');
    hasError = true;
  }

  if (password.length < 6) {
    showError('passwordError', 'Password must be at least 6 characters long');
    hasError = true;
  }

  if (hasError) return;

  // Register user
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  showAlert('Registration successful! Please login to continue.');
  document.getElementById('registerFormElement').reset();
  showLogin();
}

// Login Handler
function handleLogin(e) {
  e.preventDefault();
  clearErrors();

  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  // Check admin credentials
  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    currentUser = {
      role: "admin",
      name: "Administrator",
      email: ADMIN_EMAIL
    };
    localStorage.setItem("user", JSON.stringify(currentUser));
    showAlert('Admin login successful!');
    document.getElementById('loginFormElement').reset();
    updateUI();
    toggleAdminDashboard();
    return;
  }

  // Check user credentials
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    currentUser = {
      role: "user",
      name: user.name,
      email: user.email
    };
    localStorage.setItem("user", JSON.stringify(currentUser));
    showAlert(`Welcome back, ${user.name}!`);
    document.getElementById('loginFormElement').reset();
    updateUI();
    viewMaterials();
  } else {
    showError('loginPasswordError', 'Invalid email or password');
  }
}

// Upload Handler
function handleUpload(e) {
  e.preventDefault();
  clearErrors();

  const subject = document.getElementById('subject').value.trim();
  const branch = document.getElementById('branch').value;
  const semester = document.getElementById('semester').value;
  const pdfFile = document.getElementById('pdf').files[0];

  // Validation
  if (!pdfFile) {
    showError('pdfError', 'Please select a PDF file');
    return;
  }

  if (pdfFile.size > MAX_FILE_SIZE) {
    showError('pdfError', 'File size must be less than 10MB');
    return;
  }

  if (pdfFile.type !== 'application/pdf') {
    showError('pdfError', 'Only PDF files are allowed');
    return;
  }

  // Read file and save
  const reader = new FileReader();
  reader.onload = () => {
    const material = {
      id: Date.now(),
      subject,
      branch,
      semester,
      pdf: reader.result,
      uploadedBy: currentUser.name,
      uploadedAt: new Date().toISOString(),
      downloads: 0
    };

    materials.push(material);
    localStorage.setItem("materials", JSON.stringify(materials));

    showAlert('Material uploaded successfully!');
    document.getElementById('uploadFormElement').reset();
    updateAdminStats();
    displayMaterials();
  };

  reader.readAsDataURL(pdfFile);
}

// Toggle Admin Dashboard
function toggleAdminDashboard() {
  elements.adminDashboard.classList.remove('hidden');
  elements.materialsSection.classList.add('hidden');
  elements.loginForm.classList.add('hidden');
  elements.registerForm.classList.add('hidden');
  updateAdminStats();
  displayMaterials();
}

// View Materials
function viewMaterials() {
  elements.materialsSection.classList.remove('hidden');
  elements.adminDashboard.classList.add('hidden');
  elements.loginForm.classList.add('hidden');
  elements.registerForm.classList.add('hidden');
  displayMaterials();
}

// Update Admin Stats
function updateAdminStats() {
  if (elements.totalMaterials) {
    elements.totalMaterials.textContent = materials.length;
  }
  if (elements.totalUsers) {
    elements.totalUsers.textContent = users.length;
  }
  if (elements.totalDownloads) {
    elements.totalDownloads.textContent = downloads;
  }
}

// Display Materials
function displayMaterials(filteredMaterials = null) {
  const materialsToDisplay = filteredMaterials || materials;

  if (materialsToDisplay.length === 0) {
    elements.materialsGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <i class="fas fa-folder-open"></i>
        <h3>No Materials Found</h3>
        <p>${materials.length === 0 ? 'No study materials have been uploaded yet.' : 'Try adjusting your filters.'}</p>
      </div>
    `;
    return;
  }

  elements.materialsGrid.innerHTML = materialsToDisplay.map(m => `
    <div class="material-card">
      <h4><i class="fas fa-file-pdf"></i> ${m.subject}</h4>
      <div class="material-info">
        <div class="info-item">
          <i class="fas fa-code-branch"></i>
          <span>${m.branch}</span>
        </div>
        <div class="info-item">
          <i class="fas fa-calendar"></i>
          <span>Semester ${m.semester}</span>
        </div>
        <div class="info-item">
          <i class="fas fa-user"></i>
          <span>Uploaded by ${m.uploadedBy}</span>
        </div>
        <div class="info-item">
          <i class="fas fa-clock"></i>
          <span>${formatDate(m.uploadedAt)}</span>
        </div>
        <div class="info-item">
          <i class="fas fa-download"></i>
          <span>${m.downloads || 0} downloads</span>
        </div>
      </div>
      <div class="material-actions">
        <a href="${m.pdf}" download="${m.subject}.pdf" class="btn btn-primary" onclick="incrementDownload(${m.id})">
          <i class="fas fa-download"></i> Download
        </a>
        ${currentUser?.role === 'admin' ? `
          <button class="btn btn-danger" onclick="deleteMaterial(${m.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// Filter Materials
function filterMaterials() {
  const searchTerm = elements.searchInput.value.toLowerCase();
  const branchFilter = elements.branchFilter.value;
  const semesterFilter = elements.semesterFilter.value;

  const filtered = materials.filter(m => {
    const matchesSearch = m.subject.toLowerCase().includes(searchTerm);
    const matchesBranch = !branchFilter || m.branch === branchFilter;
    const matchesSemester = !semesterFilter || m.semester === semesterFilter;

    return matchesSearch && matchesBranch && matchesSemester;
  });

  displayMaterials(filtered);
}

// Increment Download Count
function incrementDownload(materialId) {
  const material = materials.find(m => m.id === materialId);
  if (material) {
    material.downloads = (material.downloads || 0) + 1;
    downloads++;
    localStorage.setItem("materials", JSON.stringify(materials));
    localStorage.setItem("downloads", downloads);
    updateAdminStats();
  }
}

// Delete Material
function deleteMaterial(materialId) {
  if (confirm('Are you sure you want to delete this material?')) {
    materials = materials.filter(m => m.id !== materialId);
    localStorage.setItem("materials", JSON.stringify(materials));
    showAlert('Material deleted successfully!');
    displayMaterials();
    updateAdminStats();
  }
}

// Logout
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.removeItem("user");
    currentUser = null;
    showAlert('Logged out successfully!');
    updateUI();
  }
}

// Format Date
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

  return date.toLocaleDateString();
}

// Attach Event Listeners
function attachEventListeners() {
  // Form submissions
  document.getElementById('registerFormElement')?.addEventListener('submit', handleRegister);
  document.getElementById('loginFormElement')?.addEventListener('submit', handleLogin);
  document.getElementById('uploadFormElement')?.addEventListener('submit', handleUpload);

  // Filters
  elements.searchInput?.addEventListener('input', filterMaterials);
  elements.branchFilter?.addEventListener('change', filterMaterials);
  elements.semesterFilter?.addEventListener('change', filterMaterials);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

// Page transition animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';
  }, 100);
});

console.log('%c📚 Engineering Study Hub - Loaded Successfully!', 'font-size: 16px; color: #FF6B35; font-weight: bold;');
console.log('%cAdmin Credentials:', 'font-size: 14px; color: #8B4513;');
console.log('%cEmail: admin@engineer.com', 'font-size: 12px; color: #666;');
console.log('%cPassword: admin123', 'font-size: 12px; color: #666;');
